import React, { useState } from "react";

function Menu(props) {
  const { menuJogador } = props;

  return (
    <div className="Menu">
      <p className="titulo-menu">Main Menu</p>
      <div className="inicio-menu">
        <div className="conteudo-menu">
          <div className="row">
            <div className="botao_start h2">
              <button
                type="button"
                className="START"
                onClick={menuJogador}
              >
                {/*Start Game*/}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="botao_score h2">
              <button 
              type="button" 
              className="TOPSCORE">
                {/*Top Score*/}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
