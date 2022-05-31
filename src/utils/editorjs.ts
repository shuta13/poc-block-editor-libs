import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { WithRequired } from "../helpers";

type CreateEditorJSParams = WithRequired<EditorConfig, "holder">;

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

export class PoCToolBar {
  static get toolbox() {
    return {};
  }
  render() {}
  save() {}
}
