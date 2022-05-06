import React from "react";
import { Link } from "react-router-dom";

function GameOver({ winStatus }) {
  return (
    <div className="GameOver">
      <div className="gameover_status">
        {winStatus ? (
          <h2 className="win_status">Game Over: You Won!</h2>
        ) : (
          <h2 className="win_status">Game Over: You Lost!</h2>
        )}
      </div>
      <Link to="/" className="pokemon_btn" onClick={window.location.reload}>
        Play Again
      </Link>
      {/* <audio className="background_song" autoPlay>
        <source src="SettingOff.mp3" />
      </audio> */}
    </div>
  );
}

export default GameOver;
