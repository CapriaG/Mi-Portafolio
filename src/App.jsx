import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackgroundMusic from "./components/Music";
import HomePage from './components/HomePage';
import Intro from './components/Intro';
import Indice from './components/Indice';
import AboutPage from './components/AboutPage';
import Technologies from './components/Technologies';
import ProjectsPage from './components/ProjectsPage';
import PersonalGrowth from './components/PersonalGrowth';
import ContactPage from './components/ContactPage';
import EndPage from './components/EndPage';

function App() {
  const location = useLocation();
  const [fadeOut, setFadeOut] = useState(false);
  const [visiblePage, setVisiblePage] = useState(location.pathname);

  useEffect(() => {
    setFadeOut(true);

    const timer = setTimeout(() => {
      setVisiblePage(location.pathname);
      setFadeOut(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`book-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <BackgroundMusic />
        <Routes location={visiblePage}>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/indice" element={<Indice />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/personalg" element={<PersonalGrowth />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
