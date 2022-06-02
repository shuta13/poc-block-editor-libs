import React, { useCallback, useState } from "react";
import { createEditorJS, editorConfigsFactory } from "../utils";
import type EditorJS from "@editorjs/editorjs";
import { ExtendableObject } from "../helpers";
import { Output } from "./Output";
import { SaveButton } from "./SaveButton";

export const EditorWithEditorJS: React.FC = () => {
  const [output, setOutput] = useState<ExtendableObject | undefined>();
  const [instance, setInstance] = useState<EditorJS | null>(null);

  const attach = useCallback((e: HTMLDivElement) => {
    const editorJs = createEditorJS({
      holder: e,
      ...editorConfigsFactory({})
    });
    setInstance(editorJs);
  }, []);

  const handleClick = useCallback(async () => {
    await instance?.isReady;
    const saved = await instance?.save();
    if (saved) setOutput(saved);
    else throw new Error();
  }, [instance, setOutput]);

  return (
    <>
      <h3>Editor.js</h3>
      <div ref={attach} />
      <SaveButton onClick={handleClick} />
      <Output data={output} />
    </>
  );
};
