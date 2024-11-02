import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ label }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="back-button-dark"
    >
      {label || '←'}
    </button>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
};

export default BackButton;