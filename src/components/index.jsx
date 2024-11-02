import PageTurnButton from './PageTurnButton';
import BackButton from './BackButton';

const Index = () => {
  return (
    <div className="index-container d-flex flex-column align-items-center">
      {/* Flecha para volver atrás en la esquina superior derecha */}
      <div className="back-button-container">
        <BackButton direction="prev" to="/intro" label="←" />
      </div>

      {/* Título del índice */}
      <h1 className="index-title">ÍNDICE</h1>

      {/* Contenedor del índice */}
      <ul className="index-list">
        <li>1. Quién soy</li>
        <li>2. Mis trabajos</li>
        <li>3. Crecimiento personal</li>
        <li>4. Contáctame</li>
      </ul>

      {/* Flecha para ir a la siguiente sección */}
      <PageTurnButton direction="next" to="/about" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default Index;
