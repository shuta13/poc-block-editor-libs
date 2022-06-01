import "./assets/styles/global.css";
import "./assets/styles/editorjs.css";
import { createEditorJS, handleOnClickSave, PoCToolBar } from "./utils";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components";

/**
 * @description Vanilla
 */
const editor = createEditorJS({
  holder: "editorjs",
  placeholder: "Type something",
  tools: {
    poc: PoCToolBar
  }
});
const saveButton = document.getElementById("save-button");
saveButton?.addEventListener("click", () => handleOnClickSave(editor));

/**
 * @description With React
 */
const reactContainer = document.getElementById("root");
if (reactContainer) {
  const root = ReactDOM.createRoot(reactContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
