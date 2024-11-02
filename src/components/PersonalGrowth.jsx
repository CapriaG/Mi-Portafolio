import { useState, useEffect } from 'react';
import BackButton from './BackButton';
import PageTurnButton from './PageTurnButton';
import growthImage from '../assets/personalg-img.png';
import smallGrowthImage from '../assets/personalg-img-p.png';

const PersonalGrowth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="personal-growth-container">
      <div className="back-button-container">
        <BackButton />
      </div>

      <div className="content-section">
        <h1 className="growth-title">3. Mi Crecimiento Personal</h1>
        <p className="growth-description">
          El crecimiento personal para mí significa más que una rutina, es un estilo de vida en constante evolución. <br></br> Me despierto a las 5 a.m. para asegurarme de comenzar cada día con propósito, y a las 7 a.m., me encuentro en el gimnasio, impulsándome a superar mis límites físicos y mentales. Controlar mis calorías no es solo una disciplina, sino una forma de honrar mi cuerpo y mantenerme enfocado. Estoy construyendo un podcast personal, un proyecto que me permite expresar mis pensamientos y compartir mi pasión, mientras me sumerjo profundamente en el aprendizaje de programación, una habilidad que me reta y me inspira. Más allá de estos hábitos, lo que realmente me motiva es dar significado a cada acción. Cada pequeña meta alcanzada, cada avance, se llena de orgullo, reflejando mi compromiso de vivir cada día como una versión mejor de mí mismo.
        </p>
      </div>

      <div className="right-section">
        <div className="image-container">
          <img 
            src={isSmallScreen ? smallGrowthImage : growthImage} 
            alt="Crecimiento personal" 
            className="growth-image" 
          />
        </div>
        <div className="bottom-text">
          <h2 className="right-title">Pasión - Ambición - Enfoque</h2>
        </div>
        {/* Flecha para avanzar */}
        <PageTurnButton direction="next" to="/contact" label="————————————————>" className="custom-button" />
      </div>
    </div>
  );
};

export default PersonalGrowth;
