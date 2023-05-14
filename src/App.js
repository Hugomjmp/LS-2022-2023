import "./assets/styles/App.css"; //vai buscar o css para a componente App
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/Menu/menu.component";
import Game from "./components/game/game.component";
import { useState } from "react";

function App() {

const [gameStarted,setGameStarted] = useState(false); /*usado */
const [gameType,setGameType] = useState("0");   /* gameType para definir se é PvP ou PvE --> 0 para PvP e 1 para PvE*/

function handleGameStart(){
  if (gameStarted==false){
    setGameStarted(true);
    console.log("aqui" + gameStarted);
  }else{
    setGameStarted(false);
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
          gameStarted={gameStarted}
          gameType = {gameType}
          handleGameStart = {handleGameStart}>
          </Menu>
          <Game
          gameStarted={gameStarted}
          gameType = {gameType}
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
