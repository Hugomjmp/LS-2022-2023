import React from "react";

function Menu() {
  return (
    <div className="Menu">
      <p>Main Menu</p>
      <div className="botao_start">
        <button type="button">Start Game</button>
      </div>
      <div className="botao_score">
        <button type="button">Top Score</button>
      </div>
    </div>
  );
}

export default Menu;
