import PageTurnButton from './PageTurnButton';
import BackButton from './BackButton';

const technologies = [
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', link: 'https://lenguajehtml.com/' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', link: 'https://lenguajecss.com/css/introduccion/que-es-css/' },
  { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png', link: 'https://getbootstrap.com/' },
  { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', link: 'https://lenguajejs.com/javascript/' },
  { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png', link: 'https://www.adobe.com/ar/products/photoshop.html' },
  { name: 'Ilustrator', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968472.png', link: 'https://www.adobe.com/ar/products/illustrator.html?gclid=CjwKCAiAjp-7BhBZEiwAmh9rBVbQpSrT5hK7cBn-uF4coq4sM7W1byYbZau3ZybVYKHb9edSkv6XpRoCpM4QAvD_BwE&sdid=3JZYB6HT&mv=search&mv2=paidsearch&ef_id=CjwKCAiAjp-7BhBZEiwAmh9rBVbQpSrT5hK7cBn-uF4coq4sM7W1byYbZau3ZybVYKHb9edSkv6XpRoCpM4QAvD_BwE:G:s&s_kwcid=AL!3085!3!459875986506!e!!g!!illustrator!630551026!10721864982&gad_source=1' },
  { name: 'In Design', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968482.png', link: 'https://www.adobe.com/ar/products/indesign.html?gclid=CjwKCAiAjp-7BhBZEiwAmh9rBVP0zaW6cNeN3ySpJxJ1HKed7gaQ9xzDz77gi-PSLQktB8oJVzUKUBoCYbsQAvD_BwE&sdid=3NQZB2RS&mv=search&mv2=paidsearch&ef_id=CjwKCAiAjp-7BhBZEiwAmh9rBVP0zaW6cNeN3ySpJxJ1HKed7gaQ9xzDz77gi-PSLQktB8oJVzUKUBoCYbsQAvD_BwE:G:s&s_kwcid=AL!3085!3!473180383625!e!!g!!in%20design!630551185!10721869782&gad_source=1' },
  { name: 'Premiere Pro', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968525.png', link: 'https://www.adobe.com/ar/products/premiere/campaign/pricing.html?gclid=CjwKCAiAjp-7BhBZEiwAmh9rBWv-kj2WZIGwLCsA4JPh0FFkvI_cKx258OXd6tZ_Syff4ZjM25wGFhoCKgUQAvD_BwE&sdid=41Y39PKP&mv=search&mv2=paidsearch&--&gad_source=1&s_kwcid=AL!3085!3!473180386043!e!!g!!premiere%20pro&ef_id=ZS8HdwAAMPhCmgAM:20241222230649:s' },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', link: 'https://react.dev/' },
  { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', link: 'https://nodejs.org/' },
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
