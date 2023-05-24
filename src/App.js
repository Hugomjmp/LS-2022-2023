import "./assets/styles/App.css"; //vai buscar o css para a componente App
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/Menu/menu.component";
import MenuPlayers from "./components/MenuPlayers/menu-players.component";
import Game from "./components/game/game.component";

import { useState } from "react";

function App() {

  const [menuJogador, setMenuJogador] = useState(false); // para ativar o menu de jogador
  const [gameStarted, setGameStarted] = useState(false); /*usado */
  const [gameType, setGameType] = useState(""); /* gameType para definir se é PvP ou PvE --> 0 para PvP e 1 para PvE*/



  function handleMenuJogador() {
    if (menuJogador === false) {
      setMenuJogador(true);
      
      console.log("aqui " + menuJogador);
    } else {
      
      setMenuJogador(false);
      console.log("aqui 2 " + menuJogador);
    }
  }

  /**
   * Quando o jogo começa
   */
   function handleGameStart() {
    if (gameStarted === false) {
      setGameStarted(true);
      console.log("aqui start " + gameStarted);
    } else {
      setGameStarted(false);
      console.log("aqui start 2 " + gameStarted);
    }
  }
   function handleGameType() {
    if (gameType === false) {
      setGameType(true);
      console.log("PVP " + gameType);
    } else {
      setGameType(false);
      console.log("PVE " + gameType);
    }
  }

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row ">
        <div className="col-1"></div>
        <div className="Menu-Game col ">
          <Menu 
          menuJogador={handleMenuJogador}
          ></Menu>
          <MenuPlayers 
          menuJogador={menuJogador}
          gameStarted={handleGameStart}
          gameType={handleGameType}
          ></MenuPlayers>
          <Game 
          menuJogador={handleMenuJogador} 
          gameStarted={gameStarted}
          
          ></Game>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
