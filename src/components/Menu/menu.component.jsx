import React from "react";

function Menu() {
  return (
    <div className="Menu">
      <p className="titulo-menu">Main Menu</p>
      <div className="row">
        <div className="botao_start h2">
          <button type="button" className="btn btn-secondary">
            Start Game
          </button>
        </div>
      </div>
      <div className="row">
        <div className="botao_score h2">
          <button type="button " className="btn btn-secondary">
            Top Score
          </button>
        </div>
      </div>
      <div className="row h2">
        <div className="col">
          <div className="Seleciona-num-jogadores">
            <div className="botao_start">
              <button type="button" className="btn btn-secondary">
                Plaver vs Computer
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="botao_score">
            <button type="button " className="btn btn-secondary">
              Player vs Player
            </button>
          </div>
        </div>
      </div>
      <div className="row h2">
        <div className="botao-start">
          <button type="button" className="botao-startgame btn btn-primary">
            START GAME
          </button>
        </div>
      </div>
      <div className="Players row">
        <div className="col">
          <p className="Player_1_name">Player 1</p>
          <p className="Player_2_name">Player 2</p>
        </div>
        <div className="col">
          <input className="form-control h2 text-center" type="text"></input>

          <input className="form-control h2 text-center" type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default Menu;
