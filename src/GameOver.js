import React from "react";
import { Link } from "react-router-dom";
import Speaker from "./Speaker";

function GameOver({ winStatus }) {
  return (
    <div className="GameOver main_background">
      <div className="speaker_container">
        <Speaker source={"SettingOff.mp3"}></Speaker>
      </div>
      <div className="gameover_status_container">
        <div className="gameover_status">
          {winStatus ? (
            <h2 className="win_status">
              Game Over: <span style={{ color: "green" }}> You Won!</span>
            </h2>
          ) : (
            <h2 className="win_status">
              Game Over:<span style={{ color: "red" }}> You Lost!</span>
            </h2>
          )}
        </div>
        <Link to="/" className="pokemon_btn" onClick={window.location.reload}>
          Play Again
        </Link>
      </div>
      <footer className="footer">
        <p>
          Images from PokeAPI. Music from Pokemon Pocket Monsters Sound Anime
          Collection
        </p>
      </footer>
    </div>
  );
}

export default GameOver;
