import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import backgroundMusic from '../assets/backgroundMusic.mp3';

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    // Reproducir o pausar el audio según el estado isPlaying
    if (isPlaying) {
      audio.play().catch((error) => console.log("Error al reproducir la música:", error));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause(); // Solo pausar en la limpieza, no reiniciar el tiempo
    };
  }, [isPlaying]); // Dependencia en isPlaying

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); // Pausar el audio
    } else {
      audio.play().catch((error) => console.log("Error al reproducir la música:", error)); // Reanudar el audio
    }
    setIsPlaying(!isPlaying); // Alternar el estado de isPlaying
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '15px', zIndex: 1000 }}>
      <button onClick={toggleMusic} style={{ padding: '10px', fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>
        <FontAwesomeIcon icon={isPlaying ? faVolumeUp : faVolumeMute} />
      </button>
    </div>
  );
}

export default BackgroundMusic;
