import "./assets/styles/App.css"; //vai buscar o css para a componente App
import "./assets/styles/MenuPlayers.css"
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/Menu/menu.component";
import MenuPlayers from "./components/MenuPlayers/menu-players.component";
import MenuPlayerNames from "./components/MenuPlayerNames/MenuPlayerNames.component"
import Game from "./components/game/game.component";

import { useState } from "react";

function App() {

  const [menuJogador, setMenuJogador] = useState(false); // para ativar o menu de jogador
  const [menuNomeJogador, setMenuNomeJogador] = useState(false); // para ativar o menu de introdução de jogadores
  const [gameStarted, setGameStarted] = useState(false); /*usado */
  const [gameType, setGameType] = useState(""); /* gameType para definir se é PvP ou PvE --> 0 para PvP e 1 para PvE*/
  const [player1nome, setPlayer1Nome] = useState("");
  const [player2nome, setPlayer2Nome] = useState("");

  const [firstPlayerToPlay,setFirstPlayerToPlay]= useState("");

  const [firstPlayerSymbol,setFirstPlayerSymbol]=useState("");
  const [secondPlayerSymbol,setSecondPlayerSymbol]=useState("");

  let min = 0;
  let max = 1;
  let aux_symbol = Math.floor(Math.random() * (max - min + 1) + min);
  let aux_firstplayer = Math.floor(Math.random() * (max - min + 1) + min);


/*-----------------------------------------------------------------*/
/*|   Definição aleatória de primeiro jogador a jogar e símbolo  |*/
/*-----------------------------------------------------------------*/
function setRandomPlayers(){
  console.log("entrou setrandom players -- aux_symbol" + aux_symbol );
  if (aux_firstplayer == 1){

    setFirstPlayerToPlay("player1");
    console.log("entrou setrandom players -- first player" + firstPlayerToPlay );
    if (aux_symbol==1){
      setFirstPlayerSymbol("X");
      console.log("simbolo primeiro jogador" + firstPlayerSymbol);
      setSecondPlayerSymbol("O");
    }else{
      setFirstPlayerSymbol("O");
      console.log(firstPlayerSymbol);
      setSecondPlayerSymbol("X");
      console.log("simbolo primeiro jogador" + firstPlayerSymbol);
    }
    }else{
      setFirstPlayerToPlay("player2");
      if (aux_symbol==1){
        setFirstPlayerSymbol("O");
        console.log(firstPlayerSymbol);
        setSecondPlayerSymbol("X");
      }else{
        setFirstPlayerSymbol("X");
        console.log(firstPlayerSymbol);
        setSecondPlayerSymbol("O");
      }
    }
}
/*-----------------------------------------------------------------*/
/*------------------------------------*/
/*|   Controla o nome dos jogadores  |*/
/*------------------------------------*/
  const handleplayernames = (player1nome, player2nome) => {
    if(gameType===0 && player1nome != null){
      setPlayer1Nome(player1nome);
      
    }else{
      setPlayer1Nome(player1nome);
      setPlayer2Nome(player2nome);
      
    }
    
    console.log("aqui" + player1nome);
  }
/*-----------------------------------------*/
  function handleMenuJogador() {
    if (menuJogador === false) {
      setMenuJogador(true);
      
      console.log("Saiu do menu Principal = " + !menuJogador);
    } else {
      
      setMenuJogador(false);
      console.log("aqui 2 " + menuJogador);
    }
  }

  /*------------------------------------*/
  /*|            Reset jogo            |*/
  /*------------------------------------*/
function handleResetGame(){
  setMenuJogador(false);
  setGameStarted(false);
  setMenuNomeJogador(false);
  setGameType(null);
  setPlayer1Nome('');
  setPlayer2Nome('');
}
  /*------------------------------------*/
  /*|    Reset Parcial jogo            |*/
  /*------------------------------------*/
  function handleResetGameParcial(){
    
    setMenuNomeJogador(false);

  }
  /*-----------------------------------------*/

  /*------------------------------------*/
  /*|   Determina se o jogo começou    |*/
  /*------------------------------------*/
   function handleGameStart() {
    if (gameStarted === false) {
      setRandomPlayers();
      setGameStarted(true);
      console.log("Inicia Jogo " + gameStarted);
    } else {
      setGameStarted(false);
      console.log("Termina Jogo " + gameStarted);
    }
  }

  
/*------------------------------------*/
/*|      Controla o tipo de jogo     |*/
/*------------------------------------*/

  const handleGameType = (event) => {
    const { value } = event.currentTarget;
    
    switch (value) {
      // Level: jogador vs computador
      case "PVE":
        setGameType(value);
        setMenuNomeJogador(true);
        //setMenuJogador(false);
        console.log("-> Menu de Jogadores " + menuNomeJogador);
        console.log("Selecionou PVE " + gameType);
        break;
      // Level: jogador vs jogador
      case "PVP":
        setGameType(value);
        setMenuNomeJogador(true);
        console.log("-> Menu de Jogadores " + menuNomeJogador);
        console.log("Selecionou PVP " + gameType);
        break;
    }
  }


/*-----------------------------------------*/
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row ">
        <div className="col-1"></div>
        <div className="Menu-Game col ">
          {menuJogador ? null :(
          <Menu 
          menuJogador={handleMenuJogador}
          ></Menu>
        )}
        {gameStarted + menuNomeJogador ? null : (
          <MenuPlayers 
          menuJogador={menuJogador}
          gameType={handleGameType}
          resetgame={handleResetGame}
          ></MenuPlayers>
          )}
        {gameStarted + !menuNomeJogador ? null : (
          <MenuPlayerNames 
          menuJogador={menuNomeJogador}
          gameStarted={handleGameStart}
          gameType={gameType}
          playernames={handleplayernames}
          resetgame2={handleResetGameParcial}
          ></MenuPlayerNames>
          )}
          <Game 
          resetgame={handleResetGame}
          gameStarted={gameStarted}
          playernames={() => [player1nome , player2nome]}
          gameType={gameType}
          firstPlayerToPlay={firstPlayerToPlay}
          firstPlayerSymbol={firstPlayerSymbol}
          secondPlayerSymbol={secondPlayerSymbol}
          setRandomPlayers={setRandomPlayers}
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
