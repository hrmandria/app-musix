import React, {useState, useEffect} from 'react';
import "./AudioPlayer.css";
import AudioControls from './AudioControls.jsx';
import axios from 'axios';

  export default function AudioPlayer() { 
    
    const [song, setSong] = useState({});
    const [isLoading, setLoading] = useState(true);
        
      useEffect(() => {
        if (!localStorage.getItem("encrypted")){
          this.props.history.push("/");
        } 
        axios.post('http://localhost:8080/search/song', {
          'enc': localStorage.getItem("encrypted")
        })
        .then(function (response) {
          console.log(response.data.cover);
          setLoading(false);
          setSong(response.data);
          localStorage.setItem("audio",response.data.url)
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      }, [])

        console.log(this)

      if (isLoading) {
          return (
            <div>
              <p style={{alignItems:"center", color:"black"}}>Loading...</p>
            </div>
          )
        } 
      
      return (
      <div className="audio-player">
        <div className="track-info">
          <img
            src={"http://localhost:8080/"+song?.cover}
            label="image"
            height="340px"
            width="300px"
            className="image"
            alt="cover"
          />
          <h2 style={{color:"black"}}>{song?.title}</h2>
          <p style={{color:"black"}}>{song?.artist}</p>
          <AudioControls/>	
        </div>
		  </div>
  );
}

