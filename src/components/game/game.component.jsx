import { useEffect, useState } from "react";
//import { resetaqui } from "../../helpers/resetaqui";
import { TIMEOUTGAME } from "../../constants/index";

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
      handleGameStart,
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
/*    for(let i = 0; i<=3; i++){
    console.log("array de jogadores com simbolos = " + atribuisimbolo[i]);
  }*/
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayerSymbol); //simbolo que inicia aleatorio---> a funcionar
    console.log("simbolo que inicia= " + currentPlayer);
    const [currentSubTabuleiro, setCurrentSubTabuleiro] = useState(null);
    const [winner, setWinner] = useState(null);
    const [completedBoard,setCompletedBoard] = useState([
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
    const [previousPlayer, setPreviousPlayer] = useState('');
    const [previousSubBoard, setPreviousSubBoard] = useState(null);
    const [timeoutJogador, setTimeoutJogador] = useState(false);
    //const [] = useState();



/*------------------------------------*/
/*|      timer de cada jogada        |*/
/*------------------------------------*/
console.log("currentplayer " + currentPlayer);
console.log("previousPlayer " + previousPlayer);
let timerId = undefined;
const [timer, setTimer] = useState(TIMEOUTGAME);
useEffect(() => {
  if (currentPlayer == 'X') {
    timerId = setInterval(() => {
      let nextTimer;
      setTimer((previousState) => {
        nextTimer = previousState - 1;
        console.log(nextTimer);
        return nextTimer;
      });
    }, 1000);
  } else if (timer !== TIMEOUTGAME) {
    setTimer(TIMEOUTGAME);
    
  }
  if (currentPlayer == 'O') {
    timerId = setInterval(() => {
      let nextTimer;
      setTimer((previousState) => {
        nextTimer = previousState - 1;
        console.log(nextTimer);
        return nextTimer;
      });
    }, 1000);
  } else if (timer !== TIMEOUTGAME) {
    setTimer(TIMEOUTGAME);
    
  }
  return () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

}, [currentPlayer]);

useEffect(() =>{
  if(timer === 0)
  setTimeoutJogador(true);
},[timer]);
/*--------------------------------------------------------------*/
/*
    useEffect(()=>{
      if (gameStarted) {
        timerId = setInterval(() => {
          let nextTimer;
          if(currentPlayer === 'X'){ // pode haver aqui condições extra para verificação de empate/vitoria »??  o colega meteu estas condições extra por causa do codigo dele
            // definir settimer para os dois jogadores
            //  

            // para evitar que o timer decremente, deve-e colocar next timer = previousState; 
            // depois faz-se o return do next timer para o timer ficar sempre a zero, ou percorre-se o array dos quadros ganhos, faz-se o find/reduce ou outro e conta-se o numero de X e O 
            // e calcula-se o vencedor assim (isto é o que se pretende)
            setTimer((previousState) => {
              nextTimer = previousState - 1;
              return nextTimer;
            });
          }

  
          if (nextTimer === 0) {
            setGameStarted(false);
            console.log("timer explodiu");
            return nextTimer; //<<<<<----- é isto que deve ficar para ficar com o timer sempre a zero quando chegar a zero

          }
        }, 1000);
      } else if (timer !== TIMEOUTGAME) {
        setTimer(TIMEOUTGAME);
      }
  
      return () => {
        if (timerId) {
          clearInterval(timerId);
        }
      };
    }, [gameStarted]);
*/


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
        /*******************************#######
         * Lê ISTO HUGO!!!
         * TENTA FAZER UMA COMPARAÇÃO DO TAMANHO DE LINE (LINE.LENGTH) E COM O ULTIMO INDICE DO LINE? (não sei se dará)
         * PODE SER QUE ASSIM CONSIGAS DETETAR O FIM DE UM SUBBOARD PREENCHIDO E AÍ FAZ-SE O SETWINNER
         * 
         * OU ENTÃO,
         * À MEDIDA QUE SE PERCORRE O LINES, COLOCA-SE PARA UM OUTRO ARRAY O CONTEUDO DO SUBBOARD DESSE INDEX E, QUANDO O ARRAY FICAR PREENCHIDO COM 8 SLOTS,
         * QUER DIZER QUE TÁ TUDO PREENCHIDO E AÍ É TENTAR VER AQUELAS CONDIÇÕES QUE FALEI PELO WHATSAPP (TRêS ELEMENTOS SEGUIDOS IGUAIS, NUM CICLO FOR A CONTAR ATÉ TRES, REPRESENTA UMA LINHA E POR AI ADIANTE)
         * 
         * TAMBÉM SE PODE TENTAR MUDAR O QUE É RECEBIDO NESTA FUNÇÃO E NAS QUE VêM PARA RECEBER APENAS O INDICE DO SUBBOARD E DA CELULA NUM ARRAY NORMAL (DE 0 8)
         * E AÍ TORNA-SE MAIS LEGÍVEL E TEM-SE UMA FORMA MAIS AMISTOSA DE SE COMPARAR --> VER LINHAS 473; 474; CONST SUBTABULEIRO, CELULA e boarstate (altera-lo para um bidemnsional)
         * 
         * 
         * 
         * 
         */
            // Verifica se o subtabuleiro está preenchido
        if (boardState[subBoardIndex][rowA][ColA] === '') {
            AUXTABULEIROCHEIO = false;
            console.log("entrou no "+ boardState[subBoardIndex][rowA][ColA]);
        }
      }
  
  // Se o subtabuleiro estiver preenchido e não houver um vencedor, é um empate
  if (AUXTABULEIROCHEIO===false) {
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
      
      const occupiedIndexes = completedBoard.reduce((indexes, value, index) => {
        if (value === 'X' || value === 'O' || value === 'T' ) {
          console.log("value" + value);
          indexes.push(index);
        }
        return indexes;
      },[]);

      //if (occupiedIndexes.find('X')===false|| occupiedIndexes.find('O')){} //isto está a matar o jogo

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
      <div className="esconde" hidden={timeoutJogador === true}>
        <div className="GameInfo">
          <div className="stuff row">
            <label className="Time text-white">Time: {timer} </label>
            {atribuisimbolo.map((currentPlayer, index) => {
              const isPlayerActive = currentPlayer === activePlayer;
              console.log("isPlayerActive " + isPlayerActive);
              if (isPlayerActive) {
                if (currentPlayer === atribuisimbolo[1]) {
                  return (
                    <label
                      className={`P1 col ${isPlayerActive ? "active" : ""} ${
                        atribuisimbolo[1]
                      }`}
                      key={index}
                    >
                      {"Jogador 1: " + atribuisimbolo[0] + " " + currentPlayer}
                    </label>
                  );
                }
                if (currentPlayer === atribuisimbolo[3]) {
                  return (
                    <label
                      className={`P2 col ${isPlayerActive ? "active" : ""} ${
                        atribuisimbolo[3]
                      }`}
                      key={index}
                    >
                      {"Jogador 2: " + atribuisimbolo[2] + " " + currentPlayer}
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
        </div>
      </div>
      <div className="ganhou_por_falta_de_tempo" hidden={timeoutJogador === false}>
        {atribuisimbolo.map((currentPlayer, index) => {
          if (currentPlayer === atribuisimbolo[1]) {
            const playerwon = atribuisimbolo[2]
            console.log("FDS " + playerwon);
            return (
              <label

                className={`P2 col ${ playerwon} ${atribuisimbolo[3]}`}
                key={index}
                
              >
                Ganhou { playerwon } com o simbolo {atribuisimbolo[3]}
              </label>
            );
          }
        })}
        
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
