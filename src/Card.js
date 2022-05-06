import React from "react";
import { useState, useCallback } from "react";


function Card({
  pokemonID,
  firstPick,
  secondPick,
  setFirstPick,
  setSecondPick,
}) {
  const flipImage = (event) => {
    // If card is already flipped then don't allow click
    if (!event.target.classList.contains("back_card")) return;
    event.target.classList.remove("back_card");

    // if (firstPick && secondPick) return;

    // Setting state for either first or second card
    if (firstPick) {
      setSecondPick(pokemonID);
    } else {
      setFirstPick(pokemonID);
    }
  };

  const [imgSrc, changeSrc] = useState("whos_that_pokemon.jpg");
  const [cardStatus, changeCardStatus] = useState(false);

  return (
    <img
      className={`Card pokemon${pokemonID} back_card`}
      // src={imgSrc}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
      alt=""
      // width="300px"
      // height="150px"
      onClick={flipImage}
    />
  );
}

export default Card;
