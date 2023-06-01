import React from "react";
import { useState } from "react";
import { Calcula_Vencedor } from "../../helpers";

function Game(props) {
  const {
    gameStarted,
    playernames,
    gameType,
    resetgame,
    firstPlayerToPlay,
    firstPlayerSymbol,
    secondPlayerSymbol,
  } = props;

  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [jogador1, jogador2] = playernames();

  function handleChange(){// funcao para fazer enable/disable dos tabuleiros
  }


  function selectRandomTable(){
    let min = 0;
    let max = 8;
    let nextTable;
    nextTable =  Math.floor(Math.random() * (max - min + 1) + min);
    return nextTable;
  } 





  const handleClick = (index) => {
    let teste = selectRandomTable();
    console.log("teste", teste);

    console.log(
      "entrou no handle click -- primeiro jogador" + firstPlayerToPlay
    );
    console.log(
      "entrou no handle click -- simbolo primeiro jogador" + firstPlayerSymbol
    );
    console.log(
      "entrou no handle click -- simbolo segundo jogador" + secondPlayerSymbol
    );
    if (Calcula_Vencedor(tabuleiro) || tabuleiro[index]) {
      return;
    }
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = xIsNext ? "X" : "O";
    setTabuleiro(novoTabuleiro);
    setXIsNext(!xIsNext);
  };
  const renderSquare = (index) => {
    return (
      <button
        className="square font-weight-bold btn btn-block btn-transparent"
        onClick={() => handleClick(index)}
      >
        {tabuleiro[index]}
      </button>
    );
  };

  return (
    <div className="Game" hidden={gameStarted === false}>
      <div className="GameInfo">
        <div className="stuff row">
          <label className="Time text-white">Time: </label>
          <label className="P1_points text-white col">{jogador1} Points</label>
          <label className="P2_points text-white col">{jogador2} Points</label>
        </div>
      </div>

      <div className="linha_1_a_3 row border-bottom border-dark border-5">
        <div className="Tabuleiro_1 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Celula_1 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(0)}
            </div>
            <div className="Celula_2 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(1)}
            </div>
            <div className="Celula_3 d-grid gap-2 col p-0">
              {renderSquare(2)}
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5 p-0">
            <div className="Celula_1 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(3)}
            </div>
            <div className="Celula_2 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(4)}
            </div>
            <div className="Celula_3 d-grid gap-2 col p-0">
              {renderSquare(5)}
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Celula_1 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(6)}
            </div>
            <div className="Celula_2 d-grid gap-2 col border-end border-white border-5 p-0">
              {renderSquare(7)}
            </div>
            <div className="Celula_3 d-grid gap-2 col p-0">
              {renderSquare(8)}
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5" >
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
      </div>

      <div className="linha_4_a_6 row border-bottom border-dark border-5">
        <div className="Tabuleiro_1 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
      </div>

      <div className="linha_7_a_9 row">
        <div className="Tabuleiro_1 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col" onchange={handleChange}>
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula"></button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="linha_mini_menu">
        <button className="QuitGame btn btn-light" onClick={resetgame}>
          Quit{" "}
        </button>
      </div>
    </div>
  );
}

export default Game;
