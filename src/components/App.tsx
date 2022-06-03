import React from "react";
import { EditorWithEditorJS } from "./EditorWithEditorJS";
// import { EditorWithGurtenberg } from "./EditorWithGurtenberg";
import { EditorWithLexical } from "./EditorWithLexical";

export const App: React.FC = () => {
  return (
    <>
      <EditorWithEditorJS />
      <hr />
      {/*
       * NOTE: comment out for suppressing the error
       * <EditorWithGurtenberg />
       *
       */}
      <hr />
      <EditorWithLexical />
    </>
  );
};
