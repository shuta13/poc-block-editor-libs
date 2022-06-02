import React from "react";
import { Output } from "./Output";
import { SaveButton } from "./SaveButton";

export const EditorWithLexical: React.FC = () => {
  return (
    <>
      <h3>Lexical</h3>
      <SaveButton onClick={() => {}} />
      <Output />
    </>
  );
};
