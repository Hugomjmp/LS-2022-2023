import React from "react";
import { useState } from "react";
//import { Calcula_Vencedor } from "../../helpers";


const Cell = ({ value, onClick }) => {
  return (
    
    <button className={"cell"} onClick={onClick}>
      {value}
    </button>
  );
};

const SubBoard = ({ subBoardState, onCellClick, isActive }) => {
  return (
    <div className={`sub-board ${isActive ? 'active-sub-board' : ''}`}>
      {subBoardState.map((row, rowIndex) => (
        <div key={rowIndex} className="sub-board-row">
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              value={cell}
              onClick={() => onCellClick(rowIndex, cellIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

  const Game = (props) => {
    const {
      gameStarted,
      playernames,
      gameType,
      resetgame/*,
      firstPlayerToPlay,
      firstPlayerSymbol,
      secondPlayerSymbol,*/
    } = props;
    const [boardState, setBoardState] = useState([
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
    ]);
    const [jogador1, jogador2] = playernames();
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [currentSubBoard, setCurrentSubBoard] = useState(null);
    const [winner, setWinner] = useState(null);
  
    const handleCellClick = (subBoardRow, subBoardCell, cellRow, cellCol) => {
      if (winner) return;
      if (currentSubBoard !== null && currentSubBoard !== subBoardRow * 3 + subBoardCell) return;
    
      const subBoardIndex = subBoardRow * 3 + subBoardCell;
      const newBoardState = [...boardState];
      const subBoard = newBoardState[subBoardIndex];
      if (subBoard[cellRow][cellCol] === '') {
        subBoard[cellRow][cellCol] = currentPlayer;
        setBoardState(newBoardState);
        checkWinner(newBoardState, subBoardRow, subBoardCell);
        checkSubBoardWinner(newBoardState, subBoardIndex); // Verificar vencedor do sub-tabuleiro
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        setCurrentSubBoard(cellRow * 3 + cellCol);
      }
    };
    
    const checkSubBoardWinner = (boardState, subBoardIndex) => {
      const lines = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ];
    
      for (let line of lines) {
        const [a, b, c] = line;
        const [rowA, colA] = a;
        const [rowB, colB] = b;
        const [rowC, colC] = c;
    
        if (
          boardState[subBoardIndex][rowA][colA] !== '' &&
          boardState[subBoardIndex][rowA][colA] === boardState[subBoardIndex][rowB][colB] &&
          boardState[subBoardIndex][rowA][colA] === boardState[subBoardIndex][rowC][colC]
        ) {
          setWinner(boardState[subBoardIndex][rowA][colA]);
          return;
        }
      }
    };
   
  
    const checkWinner = (boardState, subBoardRow, subBoardCell) => {
      const lines = [
        // Horizontal lines
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Vertical lines
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonal lines
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ];
  
      for (let line of lines) {
        const [a, b, c] = line;
        const [rowA, colA] = a;
        const [rowB, colB] = b;
        const [rowC, colC] = c;
  
        if (
          boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] !== '' &&
          boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] ===
            boardState[subBoardRow * 3 + rowB][subBoardCell * 3 + colB] &&
          boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] ===
            boardState[subBoardRow * 3 + rowC][subBoardCell * 3 + colC]
        ) {
          setWinner(boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA]);
          return;
        }
      }
    };
  
  return (
    <div className="Game" hidden={gameStarted === false}>
      <div className="GameInfo">
        <div className="stuff row">
          <label className="Time text-white">Time: </label>
          <label className="P1_points text-white col">{jogador1} Points</label>
          <label className="P2_points text-white col" hidden={gameType === false}>{jogador2} Points</label>
        </div>
      </div>
{/*-----------------------------------------------------------------*/
/*|                      tabuleiro do jogo                         |*/
/*-----------------------------------------------------------------*/}
      <div className="jogo">
      {boardState.map((subBoard, subBoardIndex) => {
        const row = Math.floor(subBoardIndex / 3); // Calcular o número da linha do sub-tabuleiro
        const col = subBoardIndex % 3; // Calcular o número da coluna do sub-tabuleiro
        const isActive = subBoardIndex === currentSubBoard;


        return (
          <SubBoard
            key={subBoardIndex}
            subBoardState={subBoard}
            onCellClick={(cellRow, cellCol) => handleCellClick(row, col, cellRow, cellCol)}
            isActive={isActive}
          />
        );
      })}
      {winner && (
        <div className="winner">
          O jogador {winner} venceu!
        </div>
      )}
      {!winner && (
        <div className="player">
          Próximo jogador: {currentPlayer}
        </div>
      )}

    </div>

      <div className="linha_mini_menu">
        <button className="QuitGame btn btn-light" onClick={resetgame}>
          Quit{" "}
        </button>
      </div>
    </div>
  );
}/*
<div className="sub-board-labels">
{[...Array(9)].map((_, index) => (
  <div
    key={index}
    className={`sub-board-label ${index === currentSubBoard ? 'active' : ''}`}
    onClick={() => handleSubBoardClick(index)}
  >
    Sub-Tabuleiro {index + 1}
  </div>
))}
</div>*/
export default Game;
