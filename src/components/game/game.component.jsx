import React, { useEffect } from "react";
import { useState } from "react";
//import { Calcula_Vencedor } from "../../helpers";
import { hasWinner } from "../../helpers";

var FIRSTPLAYFLAG = true;
var AUXTABULEIROCHEIO = true;

const Cell = ({ value, onClick }) => {
  return (
    
    <button className={"cell"} onClick={onClick}>
      {value}
    </button>
  );
};

const SubBoard = ({ subBoardState, onCellClick, isActive }) => {
  return (
    <div className={`sub-board ${isActive ? 'active-sub-board' : 'inactive-sub-board'}`}>
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
    const [completedBoard,setCompletedBoard]=useState([
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
    ]);
    const [previousPlayer, setPreviousPlayer]=useState('');
    const [previousSubBoard, setPreviousSubBoard] = useState(null);
    const []=useState();
    


    useEffect(()=> {
      
        console.log("inicio completed board" +completedBoard );
        console.log("current player useeffect" + previousPlayer);
        const auxCompletedBoard = [...completedBoard];
        auxCompletedBoard[previousSubBoard] = previousPlayer;
        setCompletedBoard(auxCompletedBoard);
        console.log("completedboard"+ completedBoard);
        disableboards();
    }, [winner]);

    function disableboards(){
      console.log("entrou");
    }
    useEffect(()=>{
      //const aux_CompletedBoard = [...completedBoard];
      let min = 0;
      let max = 8;
      let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
      
      console.log(" useeffect --- indice ANTES do while" + nextSubBoardIndex);
      


      const occupiedIndexes = completedBoard.reduce((indexes, value, index) => {
        if (value === 'X' || value === 'O' || value === 'tie' ) {
          indexes.push(index);
        }
        return indexes;
      },[]);

      console.log("indexes", occupiedIndexes);

      while(occupiedIndexes.includes(nextSubBoardIndex)==true) {
        console.log("ENTROU NO INCLUDES" + occupiedIndexes.includes(nextSubBoardIndex));
        nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("ENTROU NO INCLUDES --- SUBBOARD INDEX" + nextSubBoardIndex);
      }

      console.log("useeffect --- nextSubBoardIndex depois do occupied indexes" +nextSubBoardIndex );
      

      /*for (let i=0; i<=completedBoard.length; i++){
        if (i==nextSubBoardIndex){
          console.log("entrou no iff do FOOOOOR");
         // i=0;
        }
        console.log(" USEEFFECT FOOOOOR ---completedboard"+completedBoard[i] + i);
      }
      while(completedBoard[nextSubBoardIndex]==='X'||completedBoard[nextSubBoardIndex]==='O') {
        nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(" useeffect --- indice DENTRO do while" + nextSubBoardIndex);
        console.log(" USEEFFECT ---completedboard"+ completedBoard[nextSubBoardIndex]);
      }*/
      
      setCurrentSubBoard(nextSubBoardIndex);
    },[currentPlayer, completedBoard]);


    const handleCellClick = (subBoardRow, subBoardCell, cellRow, cellCol) => {
      if (winner) {console.log("enbtrou no winner")};
      if (currentSubBoard !== null && currentSubBoard !== subBoardRow * 3 + subBoardCell) return;

      const subBoardIndex = subBoardRow * 3 + subBoardCell;
      let min = 0;
      let max = 8;
      let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);

      const newBoardState = [...boardState];
      const subBoard = newBoardState[subBoardIndex];

      if (subBoard[cellRow][cellCol] === '') {
        setPreviousPlayer(currentPlayer);
        setPreviousSubBoard(currentSubBoard);
        subBoard[cellRow][cellCol] = currentPlayer;
        setBoardState(newBoardState);
        checkWinner(newBoardState, subBoardRow, subBoardCell);
        checkSubBoardWinner(newBoardState, subBoardIndex); // Verificar vencedor do sub-tabuleiro
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

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
        const [rowA, ColA] = a;
        const [rowb, ColB] = b;
        const [rowC, ColC] = c;
        if (
          boardState[subBoardIndex][rowA][ColA] !== '' &&
          boardState[subBoardIndex][rowA][ColA] === boardState[subBoardIndex][rowb][ColB] &&
          boardState[subBoardIndex][rowA][ColA] === boardState[subBoardIndex][rowC][ColC]
        ) {
          console.log("entrou no subwinner");
          setWinner(boardState[subBoardIndex][rowA][ColA]);
          //auxTabuleiroCheio = false;
          return;
        }
            // Verifica se o subtabuleiro está preenchido
    if (boardState[subBoardIndex][rowA][ColA] === '') {
      AUXTABULEIROCHEIO = false;
    }
      }

  // Se o subtabuleiro estiver preenchido e não houver um vencedor, é um empate
  if (AUXTABULEIROCHEIO) {
    setWinner('tie');
    //boardState[subBoardIndex]
    console.log("empate");
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
          console.log("entrou no winner funoca");
          /*setWinner(boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA]);*/
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
        const isActive =  subBoardIndex === currentSubBoard;
        let row = Math.floor(subBoardIndex / 3); // Calcular o número da linha do sub-tabuleiro
        let col = subBoardIndex % 3; // Calcular o número da coluna do sub-tabuleiro
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
        <div className="winner text-white">
          O jogador {winner} venceu!
        </div>
      )}
      {!winner && (
        <div className="player text-white">
          Próximo jogador: {currentPlayer}
        </div>
      )}

    </div>

      <div className="linha_mini_menu">
        <button className="QuitGame btn" onClick={resetgame}>
          {/*Quit*/}
        </button>
      </div>
    </div>
  );
}
export default Game;
