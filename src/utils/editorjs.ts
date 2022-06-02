import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { WithRequired } from "../helpers";

// @ts-expect-error
import Header from "@editorjs/header";
// @ts-expect-error
import Embed from "@editorjs/embed";

export type CreateEditorJSParams = WithRequired<EditorConfig, "holder">;

export const createEditorJS = (params: CreateEditorJSParams) => {
  return new EditorJS(params);
};

export const handleOnClickSave = async (editor: EditorJS) => {
  const saved = await editor.save().catch((err) => {
    throw new Error(err);
  });
  const output = document.getElementById("output");
  if (output) {
    output.innerText = JSON.stringify(saved);
  }
};

export const editorConfigsFactory = (params: EditorConfig): EditorConfig => {
  return {
    placeholder: "Type Something...",
    tools: {
      header: Header,
      embed: Embed
    },
    ...params
  };
};
