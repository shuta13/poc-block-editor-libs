import "./assets/styles/global.css";
import { Editor, ToolBar } from "./components";

import { createEditorJS } from "./helpers";

import React from "react";
import * as ReactDOM from "react-dom/client";

createEditorJS();

const reactContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(reactContainer);
root.render(
  <>
    <Editor />
    <ToolBar />
  </>
);
