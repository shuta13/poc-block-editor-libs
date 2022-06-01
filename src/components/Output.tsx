import React from "react";
import { useRecoilState } from "recoil";
import { editorOutput } from "../helpers";

export const Output: React.FC = () => {
  const [output] = useRecoilState(editorOutput);
  return <pre>{output && JSON.stringify(output)}</pre>;
};
