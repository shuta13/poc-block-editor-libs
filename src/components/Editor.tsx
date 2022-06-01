import React, { useCallback, useState } from "react";
import { createEditorJS } from "../utils";
import type EditorJS from "@editorjs/editorjs";
import { useRecoilState } from "recoil";
import { editorOutput } from "../helpers";
import { EDITORJS_CONFIGS } from "../configs";

export const Editor: React.FC = () => {
  const [, setOutput] = useRecoilState(editorOutput);

  const [instance, setInstance] = useState<EditorJS | null>(null);

  const attach = useCallback((e: HTMLDivElement) => {
    const editorJs = createEditorJS({
      holder: e,
      ...EDITORJS_CONFIGS
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
      <div ref={attach} />
      <button onClick={handleClick}>save</button>
    </>
  );
};
