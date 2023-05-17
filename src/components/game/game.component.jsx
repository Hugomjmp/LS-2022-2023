import React from "react";

function Game(props) {
  const { gameStarted } = props;
  return (
    <div className="Game" hidden={gameStarted == false}>
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
              <p className="test ">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
      </div>

      <div className="linha_4_a_6 row border-bottom border-dark border-5">
        <div className="Tabuleiro_1 col border-end border-dark border-5">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
      </div>

      <div className="linha_7_a_9 row">
        <div className="Tabuleiro_1 col border-end border-dark border-5">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_2 col border-end border-dark border-5">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
        <div className="Tabuleiro_3 col">
          <div className="linha_1_a_3 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_4_a_6 row border-bottom border-white border-5">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">O</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">X</p>
            </div>
          </div>

          <div className="linha_7_a_9 row">
            <div className="Tabuleiro_1 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_2 col border-end border-white border-5">
              <p className="test">X</p>
            </div>
            <div className="Tabuleiro_3 col">
              <p className="test">O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
