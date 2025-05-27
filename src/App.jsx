import { useRef } from 'react';
import './App.css';

function App() {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="container" onClick={handlePlayAudio}>
      <img src="/fondo.jpg" alt="Fondo" className="fullscreen-image" />
      <div className="overlay-text">PEGAME EN LA COLITA</div>
      <audio ref={audioRef} src="/audio.mp3" />
    </div>
  );
}

export default App;
