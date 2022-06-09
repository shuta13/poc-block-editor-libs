import "./assets/styles/global.css";
import {
  createEditorJS,
  editorConfigsFactory,
  handleOnClickSave
} from "./utils";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { App, ErrorBoundary } from "./components";
import { RecoilRoot } from "recoil";
import { createLexical } from "./utils";
import { $getRoot, TextNode } from "lexical";
import { registerPlainText } from "@lexical/plain-text";

/**
 * @description Vanilla
 */
// Editor.js
const editorjsEditor = createEditorJS({
  holder: "editorjs",
  ...editorConfigsFactory({})
});
const buttonForEditorjs = document.getElementById("button-for-editorjs");
buttonForEditorjs?.addEventListener("click", () =>
  handleOnClickSave(editorjsEditor)
);

// Lexical
const lexicalRoot = document.getElementById("lexical");
const lexicalEditor = createLexical({
  nodes: [TextNode]
});
lexicalEditor.setRootElement(lexicalRoot);
registerPlainText(lexicalEditor);
const buttonForLexical = document.getElementById("button-for-lexical");
buttonForLexical?.addEventListener("click", () => {
  lexicalEditor.update(() => {
    const root = $getRoot();
    console.log(root.getTextContent());
  });
});

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
