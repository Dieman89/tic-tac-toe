import React, { FC } from "react";
import { Winner } from "./Board";

type ResetScreenProps = {
  winner: Winner;
  onReset: () => void;
};

export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
  return (
    <>
      <h2>Winner: {winner}</h2>
      <button onClick={onReset}>Reset</button>
    </>
  );
};
