import React from "react";
function tipojogo(){
    return (
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
    );
}
export default TipoJogo