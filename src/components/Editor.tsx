import React, { useCallback, useState } from "react";
import { createEditorJS } from "../utils";
import type EditorJS from "@editorjs/editorjs";
import { useRecoilState } from "recoil";
import { editorOutput } from "../helpers";

export const Editor: React.FC = () => {
  const [, setOutput] = useRecoilState(editorOutput);

  const [instance, setInstance] = useState<EditorJS | null>(null);

  const attach = useCallback((e: HTMLDivElement) => {
    const editorJs = createEditorJS({
      holder: e,
      placeholder: "With React!"
    });
    setInstance(editorJs);
  }, []);

  const handleClick = useCallback(async () => {
    await instance?.isReady;
    const saved = await instance?.save();
    if (saved) setOutput(saved);
  }, [instance, setOutput]);

  return (
    <>
      <div ref={attach} />
      <button onClick={handleClick}>save</button>
    </>
  );
};
