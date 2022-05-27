import EditorJS from "@editorjs/editorjs";

export const createEditorJS = () => {
  return new EditorJS({
    holder: "editor"
  });
};
