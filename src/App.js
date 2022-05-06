import "./App.css";
import { Link } from "react-router-dom";

function App() {
  // let pokemonPicsSource = [];
  // for (let i = 1; i < 500; i++) {
  //   pokemonPicsSource.push(
  //     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
  //   );
  // }

  const playAudio = () => {
    const audio = document.querySelector(".background_song");
    audio.play();
  };

  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  return (
    // <>
    //   {pokemonPicsSource.map((i) => {
    //     return <img src={i} width="500px" height="500px"></img>;
    //   })}
    // </>

    <>
      <main className="App">
        <div className="header">
          <img src="pokemon-logo.png" alt="Pokemon Logo" width={"750px"} />
          <h2>Memory Game</h2>
          {/* <button onClick={playAudio}>Audio</button> */}
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
        <audio className="background_song" autoPlay>
          <source src="SettingOff.mp3" />
        </audio>
      </main>
    </>
  );
}

export default App;
