import "./assets/styles/App.css"; //vai buscar o css para a componente App
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/Menu/menu.component";
import Game from "./components/game/game.component";

function App() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row ">
        <div className="col-1"></div>
        <div className="col ">
          <Menu></Menu>
          <Game></Game>
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
