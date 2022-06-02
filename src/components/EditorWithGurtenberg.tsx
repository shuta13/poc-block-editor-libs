import React from "react";
import { Output } from "./Output";
import { SaveButton } from "./SaveButton";

export const EditorWithGurtenberg: React.FC = () => {
  return (
    <>
      <h3>Gurtenberg(@wordpress/block-editor)</h3>
      <SaveButton onClick={() => {}} />
      <Output />
    </>
  );
};
