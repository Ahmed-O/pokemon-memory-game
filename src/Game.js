import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import { getPokemon } from "./getPokemon.js";
import Countdown from "react-countdown";
import GameOver from "./GameOver.js";
import Speaker from "./Speaker";

const pokemonIDs = getPokemon();
const currDate = Date.now();

function Game({ timeAllowed }) {
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [matchCount, setMatchCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winStatus, setWinStatus] = useState(false);

  let gameBoard = [];
  for (let i = 0; i < 20; i++) {
    gameBoard.push(
      <Card
        key={i}
        pokemonID={pokemonIDs[i]}
        firstPick={firstPick}
        secondPick={secondPick}
        setFirstPick={setFirstPick}
        setSecondPick={setSecondPick}
      />
    );
  }

  useEffect(() => {
    if (firstPick && secondPick) {
      // If user selected a matching pair
      if (firstPick === secondPick) {
        setMatchCount(matchCount + 1);
        if (matchCount === 9) {
          // Set game over boolean that becomes true when game is over or when time is finished
          // Conditional rendering based on this boolean
          setWinStatus(true);
          setGameOver(true);
        }
      }
      // Else user selected wrong pair and flip cards back over
      else {
        let tempFirstPick = document.querySelectorAll(`.pokemon${firstPick}`);
        tempFirstPick.forEach((card) => {
          if (!card.classList.contains("back_card"))
            setTimeout(() => {
              card.classList.add("back_card");
            }, 500);
        });
        let tempSecondPick = document.querySelectorAll(`.pokemon${secondPick}`);
        tempSecondPick.forEach((card) => {
          if (!card.classList.contains("back_card"))
            setTimeout(() => {
              card.classList.add("back_card");
            }, 500);
        });
      }

      // Resetting the picks
      setFirstPick(null);
      setSecondPick(null);
    }
  });

  const countdownRender = ({ minutes, seconds, completed, start }) => {
    if (completed) {
      setGameOver(true);
    } else {
      return (
        <span>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </span>
      );
    }
  };

  // Start countdown timer on first click of gameboard
  const ref = useRef();
  const startGame = () => {
    if (!gameStarted) {
      setGameStarted(true);
      ref.current?.start();
    }
  };

  return (
    <div>
      {gameOver ? (
        <div>
          <GameOver winStatus={winStatus} />
        </div>
      ) : (
        <div className="Game">
          <header className="game_header">
            <Link
              className="pokemon_btn"
              to="/"
              onClick={window.location.reload}
            >
              ← Back
            </Link>
            <div className="game_header_left">
              <div className="countdown_timer">
                <Countdown
                  date={currDate + timeAllowed}
                  renderer={countdownRender}
                  autoStart={false}
                  ref={ref}
                />
              </div>
              <Speaker source={"battlevstrainer.mp3"}></Speaker>
            </div>
          </header>
          <div className="gameboard" onClick={startGame}>
            {gameBoard}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
