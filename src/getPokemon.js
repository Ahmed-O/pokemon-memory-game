import shuffle from "./shuffleArray";

export function getPokemon() {
  // Choosing 10 random, different pokemonIDs
  let randomIDs = [];
  for (let i = 0; i < 10; i++) {
    // Choosing a random pokemonID between 1 and 250
    let randomID = Math.floor(Math.random() * 250) + 1;

    // Ensuring no duplicate pokemonIDs selected
    // Keeps picking a random number until its not already in randomIDs array
    while (randomIDs.includes(randomID)) {
      randomID = Math.floor(Math.random() * 250) + 1;
    }
    randomIDs.push(randomID);
  }

  let pokemonIDs = randomIDs.concat(randomIDs); //Creates duplicate for each pokemonID
  pokemonIDs = shuffle(pokemonIDs); //Shuffling the order of the pokemon

  return pokemonIDs;
}
