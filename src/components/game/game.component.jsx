import { useEffect, useState } from "react";
//import { resetaqui } from "../../helpers/resetaqui";
import { TIMEOUTGAME } from "../../constants/index";


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


const SubTabuleiro = ({ SubTabuleiroState, onCelulaClick, isActive, completedBoard}) => {
/*  //let iii = 0;
  if(iii == 9){
    iii = 0;
  }


const aux = completedBoard.flat();
aux.unshift('');
//console.log(aux);
/*
[X],[X],[O],[O],[''],[X],[X],[''],['']
 0   1   2   3    4   5   6   7    8
//console.log(aux);
iii++;
console.log(iii + ' ' + aux[iii]);
*/


return (
    <div className={`sub-tabuleiro ${isActive ? 'active-sub-tabuleiro' : ''}`} > 
    
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
    //console.log("firstplayer = " + firstPlayerToPlay);
    //console.log("firstPlayerSymbol " + firstPlayerSymbol);

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
    //console.log(jogador1 + jogador2);
    const [atribuisimbolo, setAtribuiSimbolo] = useState([jogador1, firstPlayerSymbol, jogador2, secondPlayerSymbol]);
/*    for(let i = 0; i<=3; i++){
    console.log("array de jogadores com simbolos = " + atribuisimbolo[i]);
  }*/
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayerSymbol); //simbolo que inicia aleatorio---> a funcionar
    //console.log("simbolo que inicia= " + currentPlayer);
    const [currentSubTabuleiro, setCurrentSubTabuleiro] = useState(null);
    const [winner, setWinner] = useState(null);
    const [ empateFinal ,setEmpateFinal] = useState(false);
    const [completedBoard,setCompletedBoard] = useState([
      ['X'],
      ['X'],
      ['O'],
      ['O'],
      ['O'],
      ['X'],
      ['X'],
      ['X'],
      [''],
    ]);
    const [previousPlayer, setPreviousPlayer] = useState(secondPlayerSymbol);
    const [previousSubBoard, setPreviousSubBoard] = useState(null);
    const [timeoutJogador, setTimeoutJogador] = useState(false);
    //const [] = useState();
    var EMPATOU = false;
    const [tie,setTie]= useState(false);


/*------------------------------------*/
/*|      timer de cada jogada        |*/
/*------------------------------------*/
//-------------não mexer aqui sff que isto funciona------------------
//console.log("currentplayer " + currentPlayer);
//console.log("previousPlayer " + previousPlayer);
let timerId = undefined;
const [timer, setTimer] = useState(TIMEOUTGAME);


useEffect(() => {
  if (currentPlayer == 'X') {
    timerId = setInterval(() => {
      let nextTimer;
      setTimer((previousState) => {
        nextTimer = previousState - 1;
        //console.log(nextTimer);
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
        //console.log(nextTimer);
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

/*--------------------------------------------------------------*//*--------------------------------------------------------------*//*--------------------------------------------------------------*/
    useEffect(()=> {
      ///console.log("inicio completed board" +completedBoard );
      //console.log("current player useeffect" + previousPlayer);
      console.log("COMPLETED BOARD PRÉ ...completedBoard" + completedBoard);
      const auxCompletedBoard = [...completedBoard];
      console.log("CÓPIA BOARD PRÉ ...completedBoard"+ auxCompletedBoard);
      console.log("TIE/WINNER");
      if (tie === true){
        auxCompletedBoard[previousSubBoard] = 'E';
        setCompletedBoard(auxCompletedBoard);
        console.log("EMPATE!!!!" + completedBoard);
        //console.log("empatou aqui"+auxCompletedBoard[previousSubBoard]);
        
      }else{
        
        auxCompletedBoard[previousSubBoard] = previousPlayer;   //<--------------------------------------------------------------------------------
        //console.log(auxCompletedBoard);
        setCompletedBoard(auxCompletedBoard);
        console.log("VITORIA!!!! ##########COMPLETED BOARD#######" + completedBoard);
        setTie(false);
        setWinner(null);
      }

      //console.log("completedboard"+ completedBoard);

      //setWinner(null);
      
  }, [ tie, winner]);
/*--------------------------------------------------------------*//*--------------------------------------------------------------*//*--------------------------------------------------------------*/

  useEffect(()=>{
    //const aux_CompletedBoard = [...completedBoard];
    let min = 0;
    let max = 8;
    let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
    
    //console.log(" useeffect --- indice ANTES do while" + nextSubBoardIndex);
    
    const teste = completedBoard.flat();
    
    const occupiedIndexes = teste.reduce((indexes, value, index) => {
      //console.log("value " + value, "index: " + index );
      if (value === 'X' || value === 'O' || value === "E" ) {
        //console.log("dentro do if value" + value);
        indexes.push(index);
      }


      return indexes;
    },[]);

    //console.log("indexes", occupiedIndexes);
    //console.log("AQUIIIIIIIIIIIIIIIIII");

    while(occupiedIndexes.includes(nextSubBoardIndex) == true) {
      //console.log("ENTROU NO INCLUDES" + occupiedIndexes.includes(nextSubBoardIndex));
      nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
      //console.log("ENTROU NO INCLUDES --- SUBBOARD INDEX" + nextSubBoardIndex);
    }

    //console.log("useeffect --- nextSubBoardIndex depois do occupied indexes" +nextSubBoardIndex );   
    setCurrentSubTabuleiro(nextSubBoardIndex);
  },[completedBoard]);

  useEffect(()=>{
    //const aux_CompletedBoard = [...completedBoard];
    let min = 0;
    let max = 8;
    let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
    
    //console.log(" useeffect --- indice ANTES do while" + nextSubBoardIndex);
    
    const teste = completedBoard.flat();
    
    const occupiedIndexes = teste.reduce((indexes, value, index) => {
      
      if (value === 'X' || value === 'O' || value === "E" ) {
        console.log("value" + value);
        indexes.push(index);
      }


      return indexes;
    },[]);

    //console.log("indexes", occupiedIndexes);
    //console.log("AQUIIIIIIIIIIIIIIIIII");

    while(occupiedIndexes.includes(nextSubBoardIndex) == true) {
      //console.log("ENTROU NO INCLUDES" + occupiedIndexes.includes(nextSubBoardIndex));
      nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);
      //console.log("ENTROU NO INCLUDES --- SUBBOARD INDEX" + nextSubBoardIndex);
    }

    //console.log("useeffect --- nextSubBoardIndex depois do occupied indexes" +nextSubBoardIndex );   
    setCurrentSubTabuleiro(nextSubBoardIndex);
  },[currentPlayer]);


  

  const handleCelulaClick = (subBoardRow, subBoardCell, cellRow, cellCol) => {
    //if (winner) {/*console.log("entrou no winner -> handleCelulaClick")*/};<<<<<----
    if (currentSubTabuleiro !== null && currentSubTabuleiro !== subBoardRow * 3 + subBoardCell) return;

    const subBoardIndex = subBoardRow * 3 + subBoardCell;
    let min = 0;
    let max = 8;
    let nextSubBoardIndex = Math.floor(Math.random() * (max - min + 1) + min);

    const newBoardState = [...boardState];
    const subBoard = newBoardState[subBoardIndex];
    //checkWinner(completedBoard);
    if (subBoard[cellRow][cellCol] === '') {
      setPreviousPlayer(currentPlayer);
      setPreviousSubBoard(currentSubTabuleiro);
      subBoard[cellRow][cellCol] = currentPlayer;
      setBoardState(newBoardState);
      checkSubBoardWinner(newBoardState, subBoardIndex); // Verificar vencedor do sub-tabuleiro
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    }
    checkWinner(completedBoard);
    
  };



    const checkSubBoardWinner = (boardState, subBoardIndex) => {
/**
 *  Sistema de coordenadas para a matriz  
 * 
 * 
 *          [0, 0] | [0, 1] | [0, 2]
 *          -------|--------|-------
 *          [1, 0] | [1, 1] | [1, 2]
 *          -------|--------|-------
 *          [2, 0] | [2, 1] | [2, 2]
 * 
 *  
 */
//combinações possiveis
/*console.log(boardState[0]);
console.log(boardState[1]);
console.log(boardState[2]);
console.log(boardState[3]);
console.log(boardState[4]);
console.log(boardState[5]);
console.log(boardState[6]);
console.log(boardState[7]);
console.log(boardState[8]);*/

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
  let isBoardFull = true; // Variável para verificar se o subtabuleiro está cheio


  for (let line of lines) {
    const [a, b, c] = line;
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const [rowC, colC] = c;
    //console.log("-------");
    //console.log(boardState[subBoardIndex][rowA][colA]);
    //console.log(boardState[subBoardIndex][rowB][colB]);
    //console.log(boardState[subBoardIndex][rowC][colC]);
    //console.log("-------");
    if (
      boardState[subBoardIndex][rowA][colA] !== '' &&
      boardState[subBoardIndex][rowA][colA] === boardState[subBoardIndex][rowB][colB] &&
      boardState[subBoardIndex][rowA][colA] === boardState[subBoardIndex][rowC][colC]
    ) {
      //console.log(subBoardIndex);
      //console.log("entrou no sub board winner");
      //console.log("tralha ---- " + boardState[subBoardIndex][rowA][colA]);
      setWinner(boardState[subBoardIndex][rowA][colA]);
      //console.log("winner dentro do subboard winner!!!! ##### " + winner);
      
      return;
    }
  }

  // Verificar se o subtabuleiro está cheio
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardState[subBoardIndex][row][col] === '') {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {

      break;
    }
  }
  
  console.log("isBoardFull" + isBoardFull);
  if (isBoardFull) {
    setTie(true);
    setWinner('E'); // Define o estado 'winner' como 'E' (empate)
    console.log(winner);
    
  }
};



const checkWinner = (completedBoard) => {

// Para o simbolo X
/**
 * [X],[X],[X],[''],[''],[''],[''],[''],[''] 1ªhipotese
 * [''],[''],[''],[X],[X],[X],[''],[''],[''] 2ªhipotese
 * [''],[''],[''],[''],[''],[''],[X],[X],[X] 3ªhipotese
 * [X],[''],[''],[''],[X],[''],[''],[''],[X] 4ªhipotese
 * [''],[''],[X],[''],[X],[''],[X],[''],[''] 5ªhipotese
 * 
 */

//const arrayresultados = completedBoard;

const arrayresultados = completedBoard.flat();

console.log(arrayresultados);
//console.log(completedBoard);

//Para o X
const simboloX = 'X';
if(arrayresultados[0] === simboloX && arrayresultados[1] === simboloX && arrayresultados[2] === simboloX ){
  setTimeoutJogador(true);
  //console.log('1ª linha 1 X');
}
if(arrayresultados[3] === simboloX && arrayresultados[4] === simboloX && arrayresultados[5] === simboloX ){
  setTimeoutJogador(true);
  //console.log('2ª linha 1 X');
}
if(arrayresultados[6] === simboloX && arrayresultados[7] === simboloX && arrayresultados[8] === simboloX ){
  setTimeoutJogador(true);
  //console.log('3ª linha 1 X');
}
if(arrayresultados[0] === simboloX && arrayresultados[4] === simboloX && arrayresultados[8] === simboloX ){
  setTimeoutJogador(true);
  //console.log('1ª diagonal 1 X');
}
if(arrayresultados[2] === simboloX && arrayresultados[4] === simboloX && arrayresultados[6] === simboloX ){
  setTimeoutJogador(true);
  //console.log('2ª diagonal 1 X');
}
//Para a O

const simboloO = 'O';
if(arrayresultados[0] === simboloO && arrayresultados[1] === simboloO && arrayresultados[2] === simboloO ){
  setTimeoutJogador(true);
  //console.log('1ª linha 1 O');
}
if(arrayresultados[3] === simboloO && arrayresultados[4] === simboloO && arrayresultados[5] === simboloO ){
  setTimeoutJogador(true);
  //console.log('2ª linha 1 O');
}
if(arrayresultados[6] === simboloO && arrayresultados[7] === simboloO && arrayresultados[8] === simboloO ){
  setTimeoutJogador(true);
  //console.log('3ª linha 1 O');
}
if(arrayresultados[0] === simboloO && arrayresultados[4] === simboloO && arrayresultados[8] === simboloO ){
  setTimeoutJogador(true);
  //console.log('1ª diagonal 1 O');
}
if(arrayresultados[2] === simboloO && arrayresultados[4] === simboloX && arrayresultados[6] === simboloO ){
  setTimeoutJogador(true);
  //console.log('2ª diagonal 1 O');
}
  // Verificar empate
  const tabuleiroCompleto = arrayresultados.every((posicao) => posicao !== '');
  if (tabuleiroCompleto && !setTimeoutJogador) {
    console.log("Empate!");
    setEmpateFinal(true);
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
//console.log(currentPlayer);
const activePlayer = currentPlayer;
//-------------------------------------------------------------------
//-------------------------------------------------------------------





//--------------------------------------------------------------------
  return (
    <div className="Game">
      <div className="esconde" hidden = {timeoutJogador === true || empateFinal === true}>
        <div className="GameInfo">
          <div className="stuff row">
            <label className="Time text-white">Time: {timer} </label>
            {atribuisimbolo.map((currentPlayer, index) => {
              const isPlayerActive = currentPlayer === activePlayer;
              //console.log("isPlayerActive " + isPlayerActive);
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

              //console.log("board em questão FORA DO ATIVE false" + subTabuleiroIndex);
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
            }
          )};
          {/*-------------------------------------------------------------------------- */}
        </div>
      </div>
      <div className="ganhou_por_falta_de_tempo" hidden={timeoutJogador === false}>
        {atribuisimbolo.map((previousPlayer, index) => {
          if (previousPlayer === atribuisimbolo[1]) {
            const playerwon = atribuisimbolo[2]

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
      <div className="empate" hidden = {empateFinal=== false}>
        
              <label


                
              >
                EMPATE
              </label>
    
        
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
