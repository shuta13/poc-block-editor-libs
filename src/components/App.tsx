import React from "react";
import { Editor } from "./Editor";
import { Output } from "./Output";
import { ToolBar } from "./ToolBar";

export const App: React.FC = () => {
  return (
    <>
      <Editor />
      <ToolBar />
      <Output />
    </>
  );
};
