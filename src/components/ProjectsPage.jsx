import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Ncero from "../assets/nceroph.png";
import Mh from "../assets/mhph.png";
import BackButton from './BackButton';
import PageTurnButton from './PageTurnButton';

const projects = [
  {
    image: Ncero,
    techStack: 'React - Node.js - Bootstrap - Canva',
    link: 'https://nivelceroarg.com.ar/',
  },
  {
    image: Mh,
    techStack: 'React - Node.js - Bootstrap - Canva',
    link: 'https://mhcortinas.com.ar/',
  },
  // Otros proyectos si es necesario
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {/* Flecha de Back */}
      <BackButton to="/previousPage" />

      {/* Sección izquierda con el carrusel */}
      <div className="carousel-section">
        <Carousel interval={900} controls={false} indicators={false}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="carousel-image"
                />
                <div className="overlay">{project.techStack}</div>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
        
        {/* Icono de GitHub debajo del carrusel */}
        <a href="https://github.com/CapriaG" target="_blank" rel="noopener noreferrer" className="github-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      {/* Sección derecha con el título y descripción */}
      <div className="details-section">
        <h1 className="projects-title">2. Trabajos</h1>
        <h2 className="projects-subtitle">Proyectos destacados</h2>
        <p className="projects-description">
          Echa un vistazo a algunos de mis proyectos recientes, en los que apliqué tecnologías como React, Node.js, y Bootstrap, entre otros. Cada proyecto representa una oportunidad para llevar mis habilidades al siguiente nivel y crear soluciones innovadoras y efectivas. 👨‍💻🚀
        </p>
      </div>

      {/* Flecha de PageTurnButton */}
      <PageTurnButton direction="next" to="/personalg" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default ProjectsPage;
