import React, { useState } from "react";

function MenuPlayers(props) {
  const { menuJogador, gameType, resetgame } = props;

  
  /*const [player1, setPlayer1] = useState("");
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
    // Limpar os campos de entrada
    //setPlayer1('');
    //setPlayer2('');
  };*/

  return (
    <div className="MenuPlayers" hidden={menuJogador === false}>
      
      <p className="titulo-menu">Main Menu</p>
        <div className="row">
          <div className="Seleciona-num-jogadores">
            <div className="botao_PVE h2">
              <button
                type="button"
                className="btn btn-secondary"
                value={"PVE"}
                onClick={gameType}
              >
                Single Player
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="botao_PVP h2">
            <button
              type="button"
              className="btn btn-secondary"
              value={"PVP"}
              onClick={gameType}
            >
              Multiplayer
            </button>
          </div>
        </div>
        <div className="row">
          <div className="botao_back h2">
            <button
              type="button "
              className="btn btn-secondary"
              onClick={resetgame}
            > Back
            </button>
          </div>
        </div>
      
      
    </div>
  );
}
export default MenuPlayers;
