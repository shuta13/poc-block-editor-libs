import "quill/dist/quill.snow.css";
import "./assets/styles/global.css";
import { createQuill, createTextChangeHandler } from "./helpers";
import { Editor, ToolBar } from "./components";

import React from "react";
import * as ReactDOM from "react-dom/client";

const editorElement = document.getElementById("editor")!;
const toolBarElement = document.getElementById("toolbar")!;
const quill = createQuill(editorElement, toolBarElement);
const handleTextChange = createTextChangeHandler(quill);
// NOTE: Output initial values
handleTextChange();
quill.on("text-change", handleTextChange);
const cheerButtonElement = document.getElementById("cheer-button")!;
cheerButtonElement.addEventListener("click", () => {
  alert("Have a fun!");
});

const reactContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(reactContainer);
root.render(
  <>
    <Editor />
    <ToolBar />
  </>
);
