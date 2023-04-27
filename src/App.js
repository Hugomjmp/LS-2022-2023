import "./assets/styles/App.css"; //vai buscar o css para a componente App
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/Menu/menu.component";
function App() {
  return (
    <div id="container">

      <Header></Header>
      <Menu></Menu>
      
      <Footer></Footer>
    </div>
  );
}

export default App; 