import React from "react";

function MenuPlayers(props) {
  const { menuJogador, gameType, gameStarted} = props;

  return (
    <div className="MenuPlayers" hidden={menuJogador === false}>
      <div className="row h2">
        <div className="col">
          <div className="Seleciona-num-jogadores">
            <div className="botao_start">
              <button type="button" className="btn btn-secondary"
              onClick={gameType}
              
              >
                Plaver vs Computer
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="botao_score">
            <button type="button " className="btn btn-secondary"
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
          <input className="Player 1 form-control h2 text-center" type="text"></input>
          <input className="Player 1 form-control h2 text-center" type="text"></input>
        </div>
      </div>
      <div className="row h2">
        <div className="botao-start">
          <button
            type="button"
            className="botao-startgame btn btn-primary"
            onClick={gameStarted}
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
