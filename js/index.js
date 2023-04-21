function LinguagensScript() {
  return <h1>Ultimate Tic-Tac-Toe</h1>;
}
function Welcome(){

}
function Footer(){
    return <footer>LinguagensScript 2022/2023 @ Hugomdjmp & PedroAlves</footer>;
}
const containerRoot = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LinguagensScript/>

    <Footer/>
  </React.StrictMode>,
  containerRoot
);
