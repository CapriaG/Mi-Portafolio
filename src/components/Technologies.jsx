import PageTurnButton from './PageTurnButton';
import BackButton from './BackButton';

const technologies = [
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', link: 'https://lenguajehtml.com/' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', link: 'https://lenguajecss.com/css/introduccion/que-es-css/' },
  { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png', link: 'https://getbootstrap.com/' },
  { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', link: 'https://lenguajejs.com/javascript/' },
  { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', link: 'https://www.figma.com/' },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', link: 'https://react.dev/' },
  { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', link: 'https://nodejs.org/' },
  { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', link: 'https://www.mysql.com/' },
];

const Technologies = () => {
  return (
    <div className="technologies-container">
      {/* Flecha de retroceso */}
      <BackButton direction="back" to="/" label="←" className="back-button" />

      <h2 className="technologies-title">2. Qué tecnologías utilizo</h2>

      <div className="technologies-list">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="technology-button"
          >
            <img src={tech.icon} alt={tech.name} className="technology-icon" />
            <span className="technology-name">{tech.name}</span>
          </a>
        ))}
      </div>

      {/* Flecha para avanzar */}
      <PageTurnButton direction="next" to="/projects" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default Technologies;
