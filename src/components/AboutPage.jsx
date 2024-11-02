import BackButton from './BackButton';
import PageTurnButton from './PageTurnButton';
import Me from "../assets/me2.png";

const About = () => {
  return (
    <div className="about-container d-flex position-relative">
      {/* Flecha de retroceso */}
      <BackButton direction="back" to="/" label="←" className="back-button" />
      
      {/* Sección izquierda */}
      <div className="about-left d-flex flex-column align-items-center">
        <img src={Me} alt="Profile" className="profile-image" />
        <h2>Soy Gabriel Capria</h2>
        <h3>Apasionado por la innovación, el detalle y el crecimiento personal.</h3>
      </div>
      
      {/* Sección derecha */}
      <div className="about-right d-flex flex-column justify-content-center align-items-center">
        <h1>1. ¿Quién soy?</h1>
        <p>
        Soy un desarrollador web comprometido con crear aplicaciones interactivas y eficientes. Con experiencia en varios proyectos freelance, mi objetivo es aportar mis habilidades en proyectos innovadores y colaborativos, formando parte de un equipo profesional que valore la creatividad y la calidad. 💻✨
        </p>
      </div>

      {/* Flecha para avanzar */}
      <PageTurnButton direction="next" to="/projects" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default About;
