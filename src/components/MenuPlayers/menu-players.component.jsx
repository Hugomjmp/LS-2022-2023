

function MenuPlayers(props) {
  const { menuJogador, gameType, resetgame } = props;

  return (
    <div className="MenuPlayers" hidden={menuJogador === false}>
      <p className="titulo-menu">Main Menu</p>
      <div className="inicio-menu-players">
        <div className="conteudo-menu-players">
          <div className="row">
            <div className="Seleciona-num-jogadores">
              <div className="botao_PVE h2">
                <button
                  type="button"
                  className="btn_pve"
                  value={"PVE"}
                  onClick={gameType}
                >
                  {/*Single Player*/}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="botao_PVP h2">
              <button
                type="button"
                className="btn_pvp"
                value={"PVP"}
                onClick={gameType}
              >
                {/*Multiplayer*/}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="botao_back h2">
              <button
                type="button "
                className="btn_back"
                onClick={resetgame}
              >
                {/*Back*/}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuPlayers;
