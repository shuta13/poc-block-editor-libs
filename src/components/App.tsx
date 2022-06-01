import React from "react";
import { Editor } from "./Editor";
import { Output } from "./Output";

export const App: React.FC = () => {
  return (
    <>
      <Editor />
      <Output />
    </>
  );
};
