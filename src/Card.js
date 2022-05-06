import React from "react";

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

    // Setting state for either first or second card
    if (firstPick) {
      setSecondPick(pokemonID);
    } else {
      setFirstPick(pokemonID);
    }
  };

  return (
    <img
      className={`Card pokemon${pokemonID} back_card`}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
      alt="Pokemon image"
      onClick={flipImage}
    />
  );
}

export default Card;
