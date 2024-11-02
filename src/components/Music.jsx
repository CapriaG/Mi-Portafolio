import { useState, useEffect, useRef } from 'react';

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio('../assets/backgroundMusic.mp3')); // Referencia al objeto de audio

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    // Reproduce la música al montar el componente
    audio.play().catch((error) => console.log("Error al reproducir la música:", error));

    // Detiene y reinicia la música al desmontar el componente
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
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <button onClick={toggleMusic} style={{ padding: '10px', fontSize: '16px' }}>
        {isPlaying ? 'Silenciar' : 'Activar Música'}
      </button>
    </div>
  );
}

export default BackgroundMusic;
