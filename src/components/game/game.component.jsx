import { useEffect, useState } from "react";
//import { resetaqui } from "../../helpers/resetaqui";
//import { TIMEOUTGAME } from "../../constants/index";

//var FIRSTPLAYFLAG = true;
var AUXTABULEIROCHEIO = true;

const Celula = ({ value, onClick }) => {
  return (
    //<button className={"celula"} onClick={onClick}>
    <button className={`celula ${value === "X" ? "X" : value === "O" ? "O" : ""}`}  onClick={onClick}>
      {value}
    </button>
  );
};
/*const Player_1 = ({firstPlayerSymbol, currentPlayer, isPlayerActive }) => {
  if (currentPlayer === firstPlayerSymbol) {
    return <div className={ `P1 ${isPlayerActive ? "active" : '' }`}></div>
  }
}*/

const SubTabuleiro = ({ SubTabuleiroState, onCelulaClick, isActive}) => {
 
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
      gameStarted, //usar no timer <---
      playernames,
      gameType,
      resetgame,
      firstPlayerToPlay,
      firstPlayerSymbol,
      secondPlayerSymbol,
    } = props;
    console.log("firstplayer = " + firstPlayerToPlay);
    console.log("firstPlayerSymbol " + firstPlayerSymbol);

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
    console.log(jogador1 + jogador2);
    const [atribuisimbolo, setAtribuiSimbolo] = useState([jogador1, firstPlayerSymbol, jogador2, secondPlayerSymbol]);
    for(let i = 0; i<=3; i++){
    console.log("array de jogadores com simbolos = " + atribuisimbolo[i]);
  }
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayerSymbol); //simbolo que inicia aleatorio---> a funcionar
    console.log("simbolo que inicia= " + currentPlayer);
    const [currentSubTabuleiro, setCurrentSubTabuleiro] = useState(null);
    const [winner, setWinner] = useState(null);
    const [completedBoard,setCompletedBoard] = useState([
      ['X'],
      ['X'],
      ['O'],
      ['X'],
      ['O'],
      ['O'],
      ['X'],
      ['O'],
      ['X'],
    ]);
    const [previousPlayer, setPreviousPlayer] = useState('');
    const [previousSubBoard, setPreviousSubBoard] = useState(null);
    const [] = useState();


    useEffect(()=> {
      
      ///console.log("inicio completed board" +completedBoard );
      //console.log("current player useeffect" + previousPlayer);
      const auxCompletedBoard = [...completedBoard];
      auxCompletedBoard[previousSubBoard] = previousPlayer;
      setCompletedBoard(auxCompletedBoard);
      //console.log("completedboard"+ completedBoard);
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
    
    //console.log(" useeffect --- indice ANTES do while" + nextSubBoardIndex);
    


    const occupiedIndexes = completedBoard.reduce((indexes, value, index) => {
      if (value === 'X' || value === 'O' || value === 'T' ) {
        console.log("value" + value);
        indexes.push(index);
      }
      return indexes;
    },[]);


/*useEffect(()=>{
  

  return (
    
    <div className={'sub-tabuleiro' ${occupiedIndexes ? "finished" : ""}}></div>
  );



},[occupiedIndexes]);*/
    console.log("indexes", occupiedIndexes);




    while(occupiedIndexes.includes(nextSubBoardIndex) === true) {
      //console.log("ENTROU NO INCLUDES" + occupiedIndexes.includes(nextSubBoardIndex));
      nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
      //console.log("ENTROU NO INCLUDES --- SUBBOARD INDEX" + nextSubBoardIndex);
    }

    //console.log("useeffect --- nextSubBoardIndex depois do occupied indexes" +nextSubBoardIndex );   
    setCurrentSubTabuleiro(nextSubBoardIndex);
  },[currentPlayer, completedBoard]);

    const handleCelulaClick = (subBoardRow, subBoardCell, cellRow, cellCol) => {
      if (winner) {/*console.log("entrou no winner -> handleCelulaClick")*/};
      if (currentSubTabuleiro !== null && currentSubTabuleiro !== subBoardRow * 3 + subBoardCell) return;

      const subBoardIndex = subBoardRow * 3 + subBoardCell;
      let min = 0;
      let max = 8;
      let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);

      const newBoardState = [...boardState];
      const subBoard = newBoardState[subBoardIndex];

      if (subBoard[cellRow][cellCol] === '') {
        setPreviousPlayer(currentPlayer);
        setPreviousSubBoard(currentSubTabuleiro);
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
            console.log(boardState[subBoardIndex][rowA][ColA]);
        }
      }
  
  // Se o subtabuleiro estiver preenchido e não houver um vencedor, é um empate
  if (AUXTABULEIROCHEIO) {
    setWinner('T');
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
  const completedBoardClean = () => {
    const vazio =[
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
  ];
  setCompletedBoard(vazio);
}
  completedBoardClean();
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
  if (currentPlayer === "O" && gameType === "PVE") {
    console.log("executou");
    setJogadaCPU(true);
  } else {
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
      if (boardState[activeSubTabuleiroIndex][row][col] === "") {
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
console.log(currentPlayer);
const activePlayer = currentPlayer;
//-------------------------------------------------------------------
  return (
    <div className="Game">
      <div className="GameInfo">
        <div className="stuff row">
          <label className="Time text-white">Time: </label>
          {atribuisimbolo.map((currentPlayer, index) => {
        const isPlayerActive = currentPlayer === activePlayer;
        console.log("isPlayerActive " + isPlayerActive);
        if (isPlayerActive) {
          if(currentPlayer === atribuisimbolo[1]){
          return (
            <label
              className={`P1 col ${isPlayerActive ? "active" : ""} ${atribuisimbolo[1]}`}
              key={index}
            >
              {"Jogador 1: " + atribuisimbolo[0] + ' ' + currentPlayer}
            </label>
          );
        }
        if(currentPlayer === atribuisimbolo[3]){
          return (
            <label
              className={`P2 col ${isPlayerActive ? "active" : ""} ${atribuisimbolo[3]}`}
              key={index}
            >
              {"Jogador 2: " + atribuisimbolo[2] + ' ' + currentPlayer}
            </label>
          );
        }
        }

       
      })}

        </div>
      </div>
      {/*-----------------------------------------------------------------*/
      /*|                      tabuleiro do jogo                         |*/
      /*-----------------------------------------------------------------*/}
      <div className="jogo">
        {boardState.map((subTabuleiro, subTabuleiroIndex) => {
          const isActive = subTabuleiroIndex === currentSubTabuleiro;
         

          let row = Math.floor(subTabuleiroIndex / 3); // Calcular o número da linha do sub-tabuleiro
          let col = subTabuleiroIndex % 3; // Calcular o número da coluna do sub-tabuleiro

          return (
            <SubTabuleiro
              key={subTabuleiroIndex}
              SubTabuleiroState={subTabuleiro}
              onCelulaClick={(celulaRow, celulaCol) =>
                handleCelulaClick(row, col, celulaRow, celulaCol)
              }
              isActive={isActive}
              completedBoard={completedBoard}
            />
            
          );
        })}
        {/*-------------------------------------------------------------------------- */}

        {winner && (
          <div className="winner text-white">O jogador {winner} venceu!</div>
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
};
export default Game;
