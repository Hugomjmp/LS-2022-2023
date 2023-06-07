import React, { useState } from "react";

function MenuPlayerNames(props) {
  const { menuNomeJogador, gameType, gameStarted, playernames, resetgame2 } =
    props;
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleplayer1name = (event) => {
    setPlayer1(event.target.value);
  };
  const handleplayer2name = (event) => {
    setPlayer2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    playernames(player1, player2);

    console.log("Nome 1:", player1);
    console.log("Nome 2:", player2);
    gameStarted();
  };

  return (
    <div hidden={menuNomeJogador === false}>
      <div className="Players">
        <div className="inicio-players-name">
          <div className="row Players-conteudo">
            <div className="col"></div>
            <div className="player-names col">
            <div className="row">
              <p className="Player_1_text fs-2 fw-bold text-light">Player 1</p>
              <input
                className="Player 1 form-control h2 text-center"
                type="text"
                value={player1}
                onChange={handleplayer1name}
              ></input>
            </div>
            <div className="row" hidden={gameType === "PVE"}>
              <p className="Player_2_text fs-2 fw-bold text-light">Player 2</p>
              <input
                className="Player 2 form-control h2 text-center"
                type="text"
                value={player2}
                onChange={handleplayer2name}
              ></input>
            </div>
          
          <div className="row h2">
            <div className="btn botao-start">
              <button
                type="submit"
                className="botao-startgame"
                onClick={handleSubmit} //voltar a ver isto depois
                //disabled={gameType === "true"}
              >
                {/*START GAME*/}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="botao_back h2">
              <button
                type="button"
                className="btn-back"
                onClick={resetgame2}
              >
                {/*Back*/}
              </button>
            </div>
          </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default MenuPlayerNames;
