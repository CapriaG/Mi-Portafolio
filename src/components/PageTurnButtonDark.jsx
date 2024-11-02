import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PageTurnButtonDark = ({ direction, to, label, className }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={`btn btn-${direction === 'next' ? 'primary' : 'secondary'} ${className}`}
    >
      {label || (direction === 'next' ? '→' : '←')}
    </button>
  );
};

PageTurnButtonDark.propTypes = {
  direction: PropTypes.oneOf(['next', 'prev']).isRequired,
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default PageTurnButtonDark;