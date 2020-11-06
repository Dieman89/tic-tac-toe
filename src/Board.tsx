import React, { FC, useState } from "react";
import styled from "styled-components";

const BoardWrapper = styled.div`
  background-color: #999999;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  display: grid;
  column-gap: 6px;
  row-gap: 6px;
`;

const Cell = styled.div`
  background-color: #fff;
`;

type CellValue = "x" | "o" | undefined;

type Winner = CellValue | "tie";

interface BoardProps {
  onGameEnd(winner: Winner): void;
}

export const Board: FC<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  return (
    <BoardWrapper>
      {" "}
      {cells.map((cell, i) => (
        <Cell key={i} />
      ))}
    </BoardWrapper>
  );
};
