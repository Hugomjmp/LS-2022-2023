import React, { useState } from "react";

function MenuPlayers(props) {
  const { menuJogador, gameType, gameStarted, playernames } = props;
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

    playernames(player1,player2);
    // Aqui você pode fazer algo com os nomes digitados, como salvá-los em um array ou enviá-los para um servidor.
    console.log("Nome 1:", player1);
    console.log("Nome 2:", player2);
    gameStarted();
    // Limpar os campos de entrada
    //setPlayer1('');
    //setPlayer2('');
  };

  return (
    <div className="MenuPlayers" hidden={menuJogador === false}>
      <div className="row h2">
        <div className="col">
          <div className="Seleciona-num-jogadores">
            <div className="botao_start">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={gameType}
              >
                Plaver vs Computer
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="botao_score">
            <button
              type="button "
              className="btn btn-secondary"
              onClick={gameType}
            >
              Player vs Player
            </button>
          </div>
        </div>
      </div>
      <div className="Players row">
        <div className="col">
          <p className="Player_1_text">Player 1</p>
          <p className="Player_2_text">Player 2</p>
        </div>
        <div className="col">
          <input
            className="Player 1 form-control h2 text-center"
            type="text"
            value={player1}
            onChange={handleplayer1name}
          ></input>
          <input
            className="Player 2 form-control h2 text-center"
            type="text"
            value={player2}
            onChange={handleplayer2name}
          ></input>
        </div>
      </div>
      <div className="row h2">
        <div className="botao-start">
          <button
            type="submit"
            className="botao-startgame btn btn-primary"
            onClick={handleSubmit} //voltar a ver isto depois

            /*disabled={selectedLevel === "0"}*/
          >
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuPlayers;
