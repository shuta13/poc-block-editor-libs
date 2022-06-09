import React from "react";
import { EditorWithEditorJS } from "./EditorWithEditorJS";
import { EditorWithGurtenberg } from "./EditorWithGurtenberg";
import { EditorWithLexical } from "./EditorWithLexical";

export const App: React.FC = () => {
  return (
    <>
      <EditorWithEditorJS />
      <hr />
      <EditorWithGurtenberg />
      <hr />
      <EditorWithLexical />
    </>
  );
};
