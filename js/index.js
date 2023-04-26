function LinguagensScript() {
  return <h1 class="titulo">Ultimate Tic-Tac-Toe</h1>;
}
function Welcome(){
    return <p class="Menu">WELCOME AQUI!!</p>
}
function Jogo(){
  return <p>JOGO AQUI!!</p>
}
function Footer(){
    return <footer>LinguagensScript 2022/2023 @ Hugomdjmp & PedroAlves</footer>;
}
const containerRoot = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LinguagensScript/>{/*Para aparecer o título*/}
    <Welcome/>
    <Footer/> {/*Para aparecer o Footer*/}
  </React.StrictMode>,
  containerRoot
);
