function LinguagensScript() {
  return <h1 class="titulo">Ultimate Tic-Tac-Toe</h1>;
}
function Welcome() {
  return (
    <div class="Menu">
      <p>Main Menu</p>
      <div class="botao_start">
        <button type="button">Start Game</button>
      </div>
      <div class="botao_score">
        <button type="button">Top Score</button>
      </div>
    </div>
  );
}
function Jogo() {
  return <p>JOGO AQUI!!</p>;
}
function Footer() {
  return (
    <footer>LinguagensScript 2022-2023 @ Hugo Pereira & Pedro Alves</footer>
  );
}
const containerRoot = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LinguagensScript />
    {/*Para aparecer o título*/}
    <Welcome />
    <Footer /> {/*Para aparecer o Footer*/}
  </React.StrictMode>,
  containerRoot
);
