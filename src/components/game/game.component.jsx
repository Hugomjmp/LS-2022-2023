import { useEffect, useState } from "react";
import { TIMEOUTGAME } from "../../constants/index";



const Celula = ({ value, onClick }) => {
  return (
    <button className={"celula"} onClick={onClick}>
      {value}
    </button>
  );
};

const SubTabuleiro = ({ SubTabuleiroState, onCelulaClick, isActive }) => {
  return (
    <div className={`sub-tabuleiro ${isActive ? 'active-sub-tabuleiro' : ''}`}>
      {SubTabuleiroState.map((row, rowIndex) => (
        <div key={rowIndex} className="sub-tabuleiro-row">
          {row.map((celula, celulaIndex) => (
            <Celula
              key={celulaIndex}
              value={celula}
              onClick={() => onCelulaClick(rowIndex, celulaIndex)}
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
    //console.log("game names:", playernames(0) + playernames(1))
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [currentSubTabuleiro, setCurrentSubTabuleiro] = useState(null);
    const [winner, setWinner] = useState(null);
    const [subTabuleiroResults, setSubTabuleiroResults] = useState([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    //const [timer, setTimer] = useState(TIMEOUTGAME); // use state para o atraso da jogada do CPU, se não, não vejo o cpu a jogar :|

    const handleCelulaClick = (subTabuleiroRow, subTabuleiroCelula, celulaRow, celulaCol) => {
      //if (winner) return;
      //console.log(winner);
      if (currentSubTabuleiro !== null && currentSubTabuleiro !== subTabuleiroRow * 3 + subTabuleiroCelula) return;
    
      const subTabuleiroIndex = subTabuleiroRow * 3 + subTabuleiroCelula;
      const newBoardState = [...boardState];
      const subTabuleiro = newBoardState[subTabuleiroIndex];
      if (subTabuleiro[celulaRow][celulaCol] === '') {
        subTabuleiro[celulaRow][celulaCol] = currentPlayer;
        setBoardState(newBoardState);
        checkWinner(newBoardState, subTabuleiroRow, subTabuleiroCelula);
        checksubTabuleiroWinner(newBoardState, subTabuleiroIndex); // Verificar vencedor do sub-tabuleiro
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        setCurrentSubTabuleiro(celulaRow * 3 + celulaCol);
      }
    };
    
    const checksubTabuleiroWinner = (boardState, subTabuleiroIndex) => {
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
    
      for (let i = 0; i < lines.length; i++) {
        const [[row1, col1], [row2, col2], [row3, col3]] = lines[i];
        const cell1 = boardState[subTabuleiroIndex][row1][col1];
        const cell2 = boardState[subTabuleiroIndex][row2][col2];
        const cell3 = boardState[subTabuleiroIndex][row3][col3];
        if (cell1 !== '' && cell1 === cell2 && cell1 === cell3) {
          const newSubTabuleiroResults = [...subTabuleiroResults];
          newSubTabuleiroResults[subTabuleiroIndex] = currentPlayer;
          setSubTabuleiroResults(newSubTabuleiroResults);
          return;
        }
      }

      const isSubTabuleiroFull = boardState[subTabuleiroIndex].every(row => row.every(cell => cell !== ''));
      if (isSubTabuleiroFull) {
        const newSubTabuleiroResults = [...subTabuleiroResults];
        newSubTabuleiroResults[subTabuleiroIndex] = 'draw';
        setSubTabuleiroResults(newSubTabuleiroResults);
      }
    };
   
  
    const checkWinner = (boardState, subTabuleiroRow, subTabuleiroCelula) => {
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
          boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] !== '' &&
          boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] ===
            boardState[subTabuleiroRow * 3 + rowB][subTabuleiroCelula * 3 + colB] &&
          boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] ===
            boardState[subTabuleiroRow * 3 + rowC][subTabuleiroCelula * 3 + colC]
        ) {
          setWinner(boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA]);
          return;
        }
      }
    };

/*-----------------------------------------------------------------*/
/*|                      Reset ao jogo                            |*/
/*-----------------------------------------------------------------*/
  const resetaqui = () =>
  {
    const apagaconteudomatriz = () =>{
      const matrizlimpa = [
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      [['', '', ''], ['', '', ''], ['', '', '']],
      ];
      setBoardState(matrizlimpa);
    }
    apagaconteudomatriz();
    setCurrentSubTabuleiro(null);
    setWinner(null);
    setCurrentPlayer('X');
    resetgame();
  }
//-------------------------------------------------------------------

/*-----------------------------------------------------------------*/
/*|                        jogada do CPU                          |*/
/*-----------------------------------------------------------------*/
const [jogadaCPU, setJogadaCPU] = useState(false);
useEffect(() => {
if (currentPlayer === "O" && gameType === "PVE"){
  console.log("executou");
  setJogadaCPU(true);
}else{
  setJogadaCPU(false);
}

}, [currentPlayer, gameType]);

useEffect(() => {
  // Verifica se é a vez do jogador de CPU jogar
  if (currentPlayer === "O" && jogadaCPU) {
    jogaCPU(); // Faz a jogada da CPU
  } 
}, [currentPlayer, jogadaCPU]);

const jogaCPU = () => {
  // Verifica qual sub-tabuleiro está ativo
  const activeSubTabuleiroIndex = currentSubTabuleiro;

  // Encontra as células vazias no sub-tabuleiro ativo
  const emptyCells = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardState[activeSubTabuleiroIndex][row][col] === '') {
        emptyCells.push({ row, col });
      }
    }
  }

  // Verifica se todas as células estão preenchidas
  if (emptyCells.length === 0) {
    setCurrentSubTabuleiro(null); // Define o sub-tabuleiro ativo como null
    return;
  }

  // Escolhe uma célula aleatória para a jogada da CPU
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[randomIndex];

  // Faz a jogada da CPU
  handleCelulaClick(
    Math.floor(activeSubTabuleiroIndex / 3),
    activeSubTabuleiroIndex % 3,
    row,
    col
  );
};


//-------------------------------------------------------------------
  return (
    <div className="Game">
      <div className="GameInfo">
        <div className="stuff row">
          <label className="Time text-white">Time: </label>
          <label className="P1_points text-white col">{jogador1} Points</label>
          <label className="P2_points text-white col" hidden={gameType === "PVE"}>{jogador2} Points</label>
        </div>
      </div>
{/*-----------------------------------------------------------------*/
/*|                      tabuleiro do jogo                         |*/
/*-----------------------------------------------------------------*/}
      <div className="jogo">
      {boardState.map((subTabuleiro, subTabuleiroIndex) => {
        const row = Math.floor(subTabuleiroIndex / 3); // Calcular o número da linha do sub-tabuleiro
        const col = subTabuleiroIndex % 3; // Calcular o número da coluna do sub-tabuleiro
        const isActive = subTabuleiroIndex === currentSubTabuleiro;
        

        return (
          <SubTabuleiro

            key={subTabuleiroIndex}
            SubTabuleiroState={subTabuleiro}
            onCelulaClick={(celulaRow, celulaCol) => handleCelulaClick(row, col, celulaRow, celulaCol)}
            isActive={isActive}
            
          />
        );
      })}
      {/*-------------------------------------------------------------------------- */}
      {winner && (
        <div className="winner text-white">
          O jogador {winner} venceu!
        </div>
      )}
      {!winner && (
        <div className="player text-white">
          Próximo jogador: {jogadaCPU ? "CPU" : currentPlayer}
        </div>
      )}

    </div>
{/*-------------------------------------------------------------------------- */}

{/*-----------------------------------------------------------------*/
/*|                      Botão Quit do jogo                        |*/
/*------------------------------------------------------------------*/}
      <div className="linha_mini_menu">
        <button className="QuitGame btn" onClick={resetaqui}>
          {/*Quit*/}
        </button>
      </div>
    </div>
//------------------------------------------------------------------------
  );
}
export default Game;
