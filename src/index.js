import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/index.css";
import "./assets/styles/Header.css";
import "./assets/styles/Footer.css";
import "./assets/styles/Menu.css";

//a Pasta src vai estar escondida da internet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

