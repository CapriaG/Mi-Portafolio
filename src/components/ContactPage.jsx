import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import BackButton from './BackButton';
import PageTurnButton from './PageTurnButton';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xpwzpjbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Ya recibí tu mensaje, te respondo en breve');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch {
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="contact-container">
      {/* Flecha de retroceso */}
      <BackButton direction="back" to="/" label="←" className="back-button" />

      <h1 className="contact-title">4. CONTACTAME</h1>

      {/* Formulario de contacto */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-button">Enviar</button>
      </form>

      {/* Redes sociales */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gabriel-capria-563400225/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/CapriaG" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:gabrielcapriadev@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/+5491173639452" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Flecha para avanzar */}
      <PageTurnButton direction="next" to="/end" label="————————————————>" className="custom-button" />
    </div>
  );
};

export default ContactPage;
