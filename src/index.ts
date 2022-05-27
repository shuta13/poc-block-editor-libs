import Quill from "quill";
import "quill/dist/quill.snow.css";

const editorElement = document.getElementById("editor")!;
new Quill(editorElement, {
  modules: {
    toolbar: [
      [
        {
          header: [1, 2, false]
        }
      ],
      ["bold", "italic", "underline"],
      ["image", "code-block"]
    ]
  },
  placeholder: "なんか書いて",
  theme: "snow"
});
