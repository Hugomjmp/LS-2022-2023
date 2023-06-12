import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/styles/index.css";
import "./assets/styles/Header.css";
import "./assets/styles/Footer.css";
import "./assets/styles/Menu.css";
import "./assets/styles/Game.css";
import "./assets/styles/App.css"; //vai buscar o css para a componente App
import "./assets/styles/MenuPlayers.css" //vai buscar o css para a componente MenuPlayers
import "./assets/styles/MenuPlayersNames.css" //vai buscar o css para a componente MenuPlayersNames
//a Pasta src vai estar escondida da internet


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

