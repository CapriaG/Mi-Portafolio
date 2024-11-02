import PageTurnButton from './PageTurnButton';
import portfolioImage from '../assets/home-img.png';

const HomePage = () => {
  return (
    <div className="home-container text-center position-relative">
      <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
      <PageTurnButton direction="next" to="/intro" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default HomePage;