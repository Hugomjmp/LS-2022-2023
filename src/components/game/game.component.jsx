import React from "react";
import { useState } from "react";
import { Calcula_Vencedor } from "../../helpers";

function Game(props) {
  const { gameStarted } = props;
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
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
      <button className="square" onClick={() => handleClick(index)}>
        {tabuleiro[index]}
      </button>
    );
  };


  return (
    <div className="Game" hidden={gameStarted==false}>
      <div className="GameInfo">
        <div className="linha_mini_menu">
          <button className="QuitGame btn btn-light">Quit</button>
          <button className="Surrender btn btn-light">
            Surrender metemos?
          </button>
        </div>
        <label className="Time text-white">Time: </label>
        <label className="P1_points: text-white"> P1 Points </label>
        <label className="P2_points: text-white"> P2 Points </label>
      </div>
      <div className="linha_1_a_3 row border-bottom border-dark border-5">
        <div className="Tabuleiro_1 col border-end border-dark border-5"> 
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula">{renderSquare(0)}</button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula">{renderSquare(1)}</button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula">{renderSquare(2)}</button>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula">{renderSquare(3)}</button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula">{renderSquare(4)}</button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula">{renderSquare(5)}</button>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <button className="celula">{renderSquare(6)}</button>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <button className="celula">{renderSquare(7)}</button>
            </div>
            <div className="Tabuleiro_3 col">
              <button className="celula">{renderSquare(8)}</button>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5">
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
        <div className="Tabuleiro_3 col">
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

      <div className="linha_4_a_6 row border-bottom border-dark border-5">
        <div className="Tabuleiro_1 col border-end border-dark border-5">
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
        <div className="Tabuleiro_2 col border-end border-dark border-5">
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
        <div className="Tabuleiro_3 col">
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
        <div className="Tabuleiro_1 col border-end border-dark border-5">
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
        <div className="Tabuleiro_2 col border-end border-dark border-5">
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
        <div className="Tabuleiro_3 col">
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
    </div>
  );

}

export default Game;
