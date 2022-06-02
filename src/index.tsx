import "./assets/styles/global.css";
import "./assets/styles/editorjs.css";
import {
  createEditorJS,
  editorConfigsFactory,
  handleOnClickSave
} from "./utils";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { App, ErrorBoundary } from "./components";
import { RecoilRoot } from "recoil";

/**
 * @description Vanilla
 */
const editor = createEditorJS({
  holder: "editorjs",
  ...editorConfigsFactory({})
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
      <ErrorBoundary>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
