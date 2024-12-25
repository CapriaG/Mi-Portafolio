import BackButton from './BackButton';
import PageTurnButton from './PageTurnButton';
import Me from "../assets/me3.png";

const About = () => {
  return (
    <div className="about-container d-flex position-relative">
      {/* Flecha de retroceso */}
      <BackButton direction="back" to="/" label="←" className="back-button" />
      
      {/* Sección izquierda */}
      <div className="about-left d-flex flex-column align-items-center">
        <img src={Me} alt="Profile" className="profile-image" />
        <h2>Soy Gabriel Capria</h2>
        <h3>Me apasiona la innovación, el detalle y el aprendizaje continuo.</h3>
      </div>
      
      {/* Sección derecha */}
      <div className="about-right d-flex flex-column justify-content-center align-items-center">
        <h1>1. ¿Quién soy?</h1>
        <p>
        Soy programador y diseñador, estoy comprometido en crear aplicaciones interactivas y eficientes. Tengo experiencia en la creación de páginas responsivas, como asi también, generando sus logos y el rediseño de los mismos. Mi objetivo es aportar mis habilidades en proyectos innovadores y colaborativos, formando parte de un equipo profesional que valore la creatividad y la calidad. 💻✨
        </p>
      </div>

      {/* Flecha para avanzar */}
      <PageTurnButton direction="next" to="/technologies" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default About;
