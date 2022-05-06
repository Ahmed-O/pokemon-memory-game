import React from "react";
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";

function Speaker() {
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

  return (
    <div className="Speaker">
      <div className="speaker_container">
        <GiSpeakerOff
          className="speaker_icon active_speaker"
          onClick={toggleAudio}
        />
        <GiSpeaker className="speaker_icon" onClick={toggleAudio} />
      </div>
      <audio className="background_song">
        <source src="SettingOff.mp3" />
      </audio>
    </div>
  );
}

export default Speaker;
