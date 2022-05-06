import React from "react";
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";

function Speaker({ source }) {
  const toggleAudio = () => {
    const audio = document.querySelector(".background_song");
    const speakers = document.querySelectorAll(".speaker_icon");
    const activeSpeaker = document.querySelector(".active_speaker");

    // Toggle audio depending on whuch speaker is active

    if (activeSpeaker.classList.contains("on_speaker")) audio.pause();
    else audio.play();

    // Changing active speaker class
    speakers.forEach((speaker) => {
      speaker.classList.toggle("active_speaker");
    });
  };

  return (
    <div className="Speaker">
      <div>
        <GiSpeakerOff
          className="speaker_icon off_speaker"
          onClick={toggleAudio}
        />
        <GiSpeaker
          className="speaker_icon on_speaker active_speaker"
          onClick={toggleAudio}
        />
      </div>
      <audio className="background_song" autoPlay={true}>
        <source src={source} />
      </audio>
    </div>
  );
}

export default Speaker;
