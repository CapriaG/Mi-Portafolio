import BackButton from './BackButton';
import { Link } from 'react-router-dom';
import portfolioImage from '../assets/end-img.png';

const HomePage = () => {
  return (
    <div className="home-container text-center position-relative">
      {/* Flecha de retroceso */}
      <BackButton direction="back" to="/" label="←" className="back-button" />
      
      {/* Imagen del portafolio */}
      <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />

      {/* Botón de vuelta al inicio */}
      <Link to="/" className="home-button">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default HomePage;
