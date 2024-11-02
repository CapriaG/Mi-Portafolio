import PageTurnButton from './PageTurnButton';
import BackButton from './BackButton';

const Intro = () => {
  return (
    <div className="intro-container d-flex position-relative">
      <BackButton label="←" /> {/* Botón de retroceso */}

      {/* Sección izquierda */}
      <div className="left-side p-4 d-flex flex-column justify-content-center align-items-center">
        <h2>INTRODUCCIÓN</h2>
        <h3>¿QUÉ VERÁS A CONTINUACIÓN?</h3>
      </div>

      {/* Sección derecha */}
      <div className="right-side p-4 d-flex flex-column justify-content-center align-items-center">
        <p className="text-center">
          Aquí encontrarás una colección de mis proyectos más destacados, que reflejan mi pasión por el desarrollo web y mi compromiso con la excelencia. A través de este recorrido, podrás explorar mis habilidades en la creación de aplicaciones interactivas, diseño de interfaces y soluciones innovadoras.
        </p>
        <PageTurnButton direction="next" to="/index" label="—————————————>" className="custom-button-intro" />
      </div>
    </div>
  );
};

export default Intro;
