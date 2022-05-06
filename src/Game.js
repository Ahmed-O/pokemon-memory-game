import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import { getPokemon } from "./getPokemon.js";
import Countdown from "react-countdown";
import App from "./App";
import GameOver from "./GameOver.js";

const pokemonIDs = getPokemon();
const currDate = Date.now();

function Game({ timeAllowed }) {
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [matchCount, setMatchCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winStatus, setWinStatus] = useState(false);
  const [resetGame, setResetGame] = useState(false);

  let gameBoard = [];
  // const pokemonIDs = getPokemon();
  // console.log("Pokemon IDs " + pokemonIDs);
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
    console.log("first pick: " + firstPick);
    console.log("second pick: " + secondPick);
    console.log("");

    if (firstPick && secondPick) {
      // If user selected a matching pair
      if (firstPick === secondPick) {
        console.log("You picked a match!");
        setMatchCount(matchCount + 1);
        console.log("Match count is " + matchCount);
        if (matchCount === 9) {
          console.log("Game over!");
          // Set game over boolean that becomes true when game is over or when time is finished
          // Conditional rendering based on this boolean
          setWinStatus(true);
          setGameOver(true);
        }

        // const matchedCards = document.querySelectorAll(`pokemon${firstPick}`);
        // console.log(matchedCards);
        // matchedCards.forEach((card) => {
        //   card.classList.add("hide_card");
        // });
      }
      // Else user selected wrong pair and flip cards back over
      else {
        console.log("You picked wrong!");
        // setTimeout(() => {
        let tempFirstPick = document.querySelectorAll(`.pokemon${firstPick}`);
        tempFirstPick.forEach((card) => {
          if (!card.classList.contains("back_card"))
            // card.classList.add("back_card");
            setTimeout(() => {
              card.classList.add("back_card");
            }, 500);
        });
        let tempSecondPick = document.querySelectorAll(`.pokemon${secondPick}`);
        tempSecondPick.forEach((card) => {
          if (!card.classList.contains("back_card"))
            // card.classList.add("back_card");
            setTimeout(() => {
              card.classList.add("back_card");
            }, 500);
        });
        // }, 500);
      }

      // Resetting the picks
      setFirstPick(null);
      setSecondPick(null);
    }
  });

  const countdownRender = ({ minutes, seconds, completed, start }) => {
    if (completed) {
      console.log("TIMER DONE");
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
          {/* {winStatus ? (
            <h2>Game Over: You Won!</h2>
          ) : (
            <h2>Game Over: You Lost!</h2>
          )} */}
          <GameOver winStatus={winStatus} />
        </div>
      ) : (
        <div className="Game">
          <header className="game_header">
            <Link to="/" onClick={window.location.reload}>
              ← Back
            </Link>
            {/* <div className="timer">0:00</div> */}
            <Countdown
              date={currDate + timeAllowed}
              renderer={countdownRender}
              autoStart={false}
              ref={ref}
            />
          </header>
          <div className="gameboard" onClick={startGame}>
            {gameBoard}
          </div>
        </div>
      )}
      <audio className="background_song" autoPlay>
        <source src="battlevstrainer.mp3" />
      </audio>
    </div>
  );
}

export default Game;
