// Function to shuffle pokemon
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

export default shuffle;
