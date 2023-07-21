import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import links from '../Utils/links';

const Navlinks = ({ onClick }) => (
  <div className="nav-links">
    {links.map((link) => {
      const { id, text, path } = link;
      return (
        <NavLink
          to={path}
          key={id}
          onClick={onClick}
          className="nav-link"
        >
          <h4>{text}</h4>
        </NavLink>
      );
    })}
  </div>
);

Navlinks.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navlinks;
