import Quill from "quill";

export type Delta = ReturnType<Quill["getContents"]>;

export const createQuill = (editor: HTMLElement, toolbar: HTMLElement) => {
  return new Quill(editor, {
    modules: {
      toolbar: toolbar
    },
    placeholder: "なんか書いて",
    theme: "snow"
  });
};

export const createTextChangeHandler = (quill: Quill) => {
  return (delta?: Delta) => {
    const contents = quill.getContents();
    console.log("contents: ", contents);
    if (delta) {
      console.log("delta ", delta);
    }
  };
};
