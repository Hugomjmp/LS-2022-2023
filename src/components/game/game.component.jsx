import React from "react";

function Game() {
  return (
    <div>
      <div className="linha_1_a_3 row">
        <div className="Tabuleiro_1 col"><p className="test">tabuleiro 1</p></div>
        <div className="Tabuleiro_2 col"><p className="test">tabuleiro 2</p></div>
        <div className="Tabuleiro_3 col"><p className="test">tabuleiro 3</p></div>
      </div>

      <div className="linha_4_a_6 row">
        <div className="Tabuleiro_1 col"><p className="test">tabuleiro 4</p></div>
        <div className="Tabuleiro_2 col"><p className="test">tabuleiro 5</p></div>
        <div className="Tabuleiro_3 col"><p className="test">tabuleiro 6</p></div>
      </div>

      <div className="linha_7_a_9 row">
        <div className="Tabuleiro_1 col"><p className="test">tabuleiro 7</p></div>
        <div className="Tabuleiro_2 col"><p className="test">tabuleiro 8</p></div>
        <div className="Tabuleiro_3 col"><p className="test">tabuleiro 9</p></div>
      </div>
    </div>
  );
}

export default Game;
