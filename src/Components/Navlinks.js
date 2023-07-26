import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import links from '../Utils/links';
import { logout } from '../store/actions/userActions';

const Navlinks = ({ onClick }) => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="nav-links">
      {username === 'guest' && (
        <NavLink to="/login" key="login" onClick={onClick} className="nav-link">
          <h4>LOGIN</h4>
        </NavLink>
      )}
      {links.map((link) => {
        const { id, text, path } = link;
        return (
          <NavLink to={path} key={id} onClick={onClick} className="nav-link">
            <h4 className="text">{text}</h4>
          </NavLink>
        );
      })}
      {username !== 'guest' && (
        <NavLink to="/logout" key="logout" onClick={handleLogout} className="nav-link">
          <h4>LOGOUT</h4>
        </NavLink>
      )}
    </div>
  );
};

Navlinks.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navlinks;
