


import Header from "./components/header/header.component"; //vai buscar o componente Header
import Footer from "./components/footer/footer.component"; //vai buscar o componente Footer
import Menu from "./components/Menu/menu.component"; //vai buscar o componente Menu
import MenuPlayers from "./components/MenuPlayers/menu-players.component"; //vai buscar o componente MenuPlayers
import MenuPlayerNames from "./components/MenuPlayerNames/MenuPlayerNames.component" //vai buscar o componente MenuPlayersNames
import Game from "./components/game/game.component"; //vai buscar o componente Game

import {  useState } from "react";
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
  
  if (aux_firstplayer === 1){

    setFirstPlayerToPlay("player1");
    
    if (aux_symbol === 1){
      setFirstPlayerSymbol("X");
      
      setSecondPlayerSymbol("O");
    }else{
      setFirstPlayerSymbol("O");
      
      setSecondPlayerSymbol("X");
      
    }
    }else{
      setFirstPlayerToPlay("player2");
      if (aux_symbol === 1){
        setFirstPlayerSymbol("O");
        
        setSecondPlayerSymbol("X");
      }else{
        setFirstPlayerSymbol("X");
        
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
  }

/*-----------------------------------------*/
  function handleMenuJogador() {
    if (menuJogador === false) {
      setMenuJogador(true);
    } else {
      setMenuJogador(false);
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
    } else {
      setGameStarted(false);
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
        break;
      // Level: jogador vs jogador
      case "PVP":
        setGameType(value);
        setMenuNomeJogador(true);
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
          />
        )}
        {gameStarted + menuNomeJogador ? null : (
          <MenuPlayers 
          menuJogador={menuJogador}
          gameType={handleGameType}
          resetgame={handleResetGame}
        />
          )}
        {gameStarted + !menuNomeJogador ? null : (
          <MenuPlayerNames 
          menuJogador={menuNomeJogador}
          gameStarted={handleGameStart}
          gameType={gameType}
          playernames={handleplayernames}
          resetgame2={handleResetGameParcial}
          />
          )}
          {gameStarted && ( // para  prevenir que o game seja renderizado logo no inicio e depois é que esconde
          <Game 
          resetgame={handleResetGame}
          gameStarted={gameStarted}
          handleGameStart={handleGameStart}
          playernames={() => [player1nome , player2nome]}
          gameType={gameType}
          firstPlayerToPlay={firstPlayerToPlay}
          firstPlayerSymbol={firstPlayerSymbol}
          secondPlayerSymbol={secondPlayerSymbol}
          setRandomPlayers={setRandomPlayers}
          
          />
          )}
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
