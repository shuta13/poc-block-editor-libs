import React from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const SaveButton: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>save</button>;
};
