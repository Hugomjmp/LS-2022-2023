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
    let nomeAleatorio_aux = "";
    let nomeAleatorio_aux2 = "";
    const nomeAleatorio = [
      "João",
      "Maria",
      "Manuel",
      "Joana",
      "Ricardo",
      "Soraia",
      "Pedro",
      "Teresa",
    ];
    //console.log("Nome Aleatorio: " + nomeAleatorio[2]);

    if (player1 === "") {
      const valor = Math.random(0.5);
      //console.log("valor " + valor);
      if (valor <= 0.125) {
        nomeAleatorio_aux = nomeAleatorio[0];
      } else if (valor > 0.125 && valor <= 0.25) {
        nomeAleatorio_aux = nomeAleatorio[1];
      } else if (valor > 0.25 && valor <= 0.375) {
        nomeAleatorio_aux = nomeAleatorio[2];
      } else if (valor > 0.375 && valor <= 0.5) {
        nomeAleatorio_aux = nomeAleatorio[3];
      } else if (valor > 0.5 && valor <= 0.625) {
        nomeAleatorio_aux = nomeAleatorio[4];
      } else if (valor > 0.625 && valor <= 0.75) {
        nomeAleatorio_aux = nomeAleatorio[5];
      } else if (valor > 0.75 && valor <= 0.875) {
        nomeAleatorio_aux = nomeAleatorio[6];
      } else if (valor > 0.875 && valor <= 1) {
        nomeAleatorio_aux = nomeAleatorio[7];
      }
    }
    
    if (player2 === "") {
      const valor = Math.random(0.5);
      //console.log("valor " + valor);
      if (valor <= 0.125) {
        nomeAleatorio_aux2 = nomeAleatorio[7];
      } else if (valor > 0.125 && valor <= 0.25) {
        nomeAleatorio_aux2 = nomeAleatorio[6];
      } else if (valor > 0.25 && valor <= 0.375) {
        nomeAleatorio_aux2 = nomeAleatorio[5];
      } else if (valor > 0.375 && valor <= 0.5) {
        nomeAleatorio_aux2 = nomeAleatorio[4];
      } else if (valor > 0.5 && valor <= 0.625) {
        nomeAleatorio_aux2 = nomeAleatorio[3];
      } else if (valor > 0.625 && valor <= 0.75) {
        nomeAleatorio_aux2 = nomeAleatorio[2];
      } else if (valor > 0.75 && valor <= 0.875) {
        nomeAleatorio_aux2 = nomeAleatorio[1];
      } else if (valor > 0.875 && valor <= 1) {
        nomeAleatorio_aux2 = nomeAleatorio[0];
      }
    }
    if (player1 === "" && player2 === "") {
      playernames(nomeAleatorio_aux, nomeAleatorio_aux2);
    }else if (player1 === "" && player2 !== ""){
      playernames(nomeAleatorio_aux, player2);
    }else if (player1 !== "" && player2 === ""){
      playernames(player1, nomeAleatorio_aux2);
    }else if (player1 !== "" && player2 !== ""){
      playernames(player1, player2);
    }
    

    //console.log("Nome 1:", player1);
    //console.log("Nome 2:", player2);
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
                <p className="Player_1_text fs-2 fw-bold text-light">
                  Player 1
                </p>
                <input
                  className="Player 1 form-control h2 text-center"
                  type="text"
                  value={player1}
                  onChange={handleplayer1name}
                ></input>
              </div>
              <div className="row" hidden={gameType === "PVE"}>
                <p className="Player_2_text fs-2 fw-bold text-light">
                  Player 2
                </p>
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
