import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import backgroundMusic from '../assets/backgroundMusic.mp3';

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Establecer el loop en true para reiniciar al final

    // Reproduce la música al montar el componente
    audio.play().catch((error) => console.log("Error al reproducir la música:", error));

    // Pausa y reinicia la música al desmontar el componente
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.log("Error al reproducir la música:", error));
    }
    setIsPlaying(!isPlaying);
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
