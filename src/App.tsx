import React from "react";
import styled from "styled-components";
import { Board } from "./Board";

const BoardContainer = styled.div`
  background: #ffffff;
  width: 500px;
  height: 500px;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffffff;
`;

function App() {
  return (
    <BoardContainer>
      <Board onGameEnd={() => {}} />
    </BoardContainer>
  );
}

export default App;
