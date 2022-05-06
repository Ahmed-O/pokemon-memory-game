import "./App.css";
import { Link } from "react-router-dom";
import Speaker from "./Speaker";

function App() {
  return (
    <>
      <main className="App main_background">
        <div className="speaker_container">
          <Speaker source={"SettingOff.mp3"}></Speaker>
        </div>
        <div className="header">
          <img src="pokemon-logo.png" alt="Pokemon Logo" />
          <h2>Memory Game</h2>
        </div>
        <div className="game_difficulty">
          <Link
            to="/easy"
            className="pokemon_btn"
            onClick={window.location.reload}
          >
            Easy
          </Link>
          <Link
            to="/medium"
            className="pokemon_btn"
            onClick={window.location.reload}
          >
            Medium
          </Link>
          <Link
            to="/hard"
            className="pokemon_btn"
            onClick={window.location.reload}
          >
            Hard
          </Link>
        </div>
        <footer className="footer">
          <p>
            Images from PokeAPI. Music from Pokemon Pocket Monsters Sound Anime
            Collection
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
