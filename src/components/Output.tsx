import React from "react";
import { ExtendableObject } from "../helpers";

type Props = {
  data?: ExtendableObject;
};

export const Output: React.FC<Props> = ({ data }) => {
  return <pre>{data && JSON.stringify(data)}</pre>;
};
