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
        <h1 className="growth-title">4. Mi Camino de Aprendizaje</h1>
        <p className="growth-description">
        A lo largo de mi carrera como desarrollador y diseñador el aprendizaje ha sido una constante.<br></br> Comencé trabajando de manera independiente como freelancer, donde cada proyecto me permitió adquirir nuevas habilidades y enfrentar desafíos que impulsaron mi crecimiento profesional. He aprendido a utilizar herramientas como In Design, Ilustator, Photoshop, Premiere Pro, React y Bootstrap, perfeccionando no solo mis habilidades técnicas, sino también mi capacidad para entender las necesidades de los clientes y transformarlas en soluciones funcionales. <br></br> Para mí, el aprendizaje no es solo una etapa, sino un proceso continuo y por eso estoy comprometido con mejorar cada día, explorar nuevas tecnologías y adaptarme a los cambios para seguir creciendo como profesional y contribuir de manera significativa a los proyectos en los que participo.
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
        {/* Flecha para avanzar */}
        <PageTurnButton direction="next" to="/contact" label="————————————————>" className="custom-button" />
      </div>
    </div>
  );
};

export default PersonalGrowth;
