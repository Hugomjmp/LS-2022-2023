import React, { useState } from "react";

function Menu(props) {
  const { menuJogador } = props;

  return (
    <div className="Menu" >
      <p className="titulo-menu">Main Menu</p>
      <div className="row">
        <div className="botao_start h2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={menuJogador}
          >
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
    </div>
  );
}

export default Menu;
