import "./App.css";
import { Link } from "react-router-dom";
import { Speakers } from "./Speaker";
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";

function App() {
  // let pokemonPicsSource = [];
  // for (let i = 1; i < 500; i++) {
  //   pokemonPicsSource.push(
  //     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
  //   );
  // }

  const toggleAudio = () => {
    console.log("HERE");
    const audio = document.querySelector(".background_song");
    const speakers = document.querySelectorAll(".speaker_icon");
    console.log(speakers);
    speakers.forEach((speaker) => {
      speaker.classList.toggle("active_speaker");
    });
    if (audio.paused) audio.play();
    else audio.pause();
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
      <main className="App main_background">
        <Speakers></Speakers>
        {/* <div className="speaker_container">
          <GiSpeakerOff
            className="speaker_icon active_speaker"
            onClick={toggleAudio}
          />
          <GiSpeaker className="speaker_icon" onClick={toggleAudio} />
        </div> */}
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
        <footer className="footer">
          <h3>Data from</h3>
        </footer>
        {/* <audio className="background_song">
          <source src="SettingOff.mp3" />
        </audio> */}
      </main>
    </>
  );
}

export default App;
