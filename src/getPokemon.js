export function getPokemon() {
  // Choosing 10 random pokemonIDs
  // let pokemonPics = [];
  let randomIDs = [];
  for (let i = 0; i < 10; i++) {
    // Choosing a random pokemonID
    let randomID = Math.floor(Math.random() * 250) + 1;
    // Ensuring no duplicate pokemonIDs selected
    while (randomIDs.includes(randomID)) {
      randomID = Math.floor(Math.random() * 250) + 1;
    }
    // pokemonPics.push(
    //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomID}.svg`
    // );
    randomIDs.push(randomID);
  }

  // Function to shuffle array (create separate file for this?)
  let shuffle = (array) => {
    let currIndex = array.length;
    while (currIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currIndex);
      currIndex--;
      [array[currIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currIndex],
      ];
    }
    return array;
  };

  let pokemonIDs = randomIDs.concat(randomIDs); //Create duplicate for each pokemonID
  pokemonIDs = shuffle(pokemonIDs); //Shuffling the order of the pokemon

  return pokemonIDs;
}
