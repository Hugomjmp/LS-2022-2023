import React from "react";

function Game() {
  return (
    <div>
      <div className="linha_1_a_3 row border-bottom border-white border-5">
        <div className="Tabuleiro_1 col border-end border-white border-5"><p className="test">X</p></div>
        <div className="Tabuleiro_2 col border-end border-white border-5"><p className="test">O</p></div>
        <div className="Tabuleiro_3 col"><p className="test">X</p></div>
      </div>

      <div className="linha_4_a_6 row border-bottom border-white border-5">
        <div className="Tabuleiro_1 col border-end border-white border-5"><p className="test">O</p></div>
        <div className="Tabuleiro_2 col border-end border-white border-5"><p className="test">O</p></div>
        <div className="Tabuleiro_3 col"><p className="test">X</p></div>
      </div>

      <div className="linha_7_a_9 row">
        <div className="Tabuleiro_1 col border-end border-white border-5"><p className="test">X</p></div>
        <div className="Tabuleiro_2 col border-end border-white border-5"><p className="test">X</p></div>
        <div className="Tabuleiro_3 col"><p className="test">O</p></div>
      </div>
    </div>
  );
}

export default Game;
