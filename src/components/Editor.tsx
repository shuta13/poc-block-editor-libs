import React, { useCallback, useState } from "react";
import { createEditorJS } from "../utils";
import type EditorJS from "@editorjs/editorjs";

export const Editor: React.FC = () => {
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
    const output = await instance?.save();
    console.log(output);
  }, [instance]);

  return (
    <>
      <div ref={attach} />
      <button onClick={handleClick}>save</button>
    </>
  );
};
