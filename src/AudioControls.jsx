import React,{useState,useRef} from 'react';
import './AudioControls.css'
import { ReactComponent as Play } from './assets/play.svg';
import { ReactComponent as Pause } from './assets/pause.svg';
import { ReactComponent as Stop } from './assets/stop.svg';

export default function AudioControls () {

  const [isPlaying, setPlaying] = useState(false);
  const audio = useRef();

  const playAudio = () => {
      console.log("play")
      audio.current.play()
      setPlaying(true);
  }

  const stopAudio = () => {
    console.log("play");
    audio.current.pause();
    audio.current.currentTime = 0;
    setPlaying(false);
}

  const pauseAudio = () => {
    console.log("pause")
    setPlaying(false);
    audio.current.pause()
}

  return(
    <div className="audio-controls">
      <audio
        ref={audio}
        src={"http://localhost:8080/"+localStorage.getItem("audio")}
      />

        {isPlaying? 
        <button
        type="button"
        id="idPlaying"
        className="pause"
        onClick={pauseAudio}
        aria-label="Pause"
      >
        <Pause />
        <p>Pause</p>
      </button> : 
      <button
      type="button"
      className="play"
      onClick={playAudio}
      aria-label="Pause"
    >
      <Play />
      <p>Play</p>
    </button>
    }
        <button
          type="button"
          className="stop"
          aria-label="stop"
          onClick={stopAudio}
        >
          <Stop />
          <p>Stop</p>
        </button>
      </div>
  )
}
  
