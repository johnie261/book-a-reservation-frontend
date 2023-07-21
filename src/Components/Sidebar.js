import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navlinks from './Navlinks';
import social from '../Utils/social';
import Logo from '../Utils/glamping.png';
import { logout } from '../store/actions/userActions';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
      {!sidebarOpen ? (
        <button type="button" className="sidebar-icon close" onClick={handleSidebarOpen}>
          <FaBars />
        </button>
      )
        : (
          <>
            <button type="button" className="sidebar-icon open" onClick={handleSidebarClose}>
              <FaTimes />
            </button>

            <div className="logo">
              <img
                src={Logo}
                alt="Logo"
                className="logo-img"
              />
            </div>

            <Navlinks />
            {username !== 'guest' && (
              <button type="button" onClick={handleLogout} className="logout-button">
                Logout
              </button>
            )}

            <div className="sidebar-footer">
              <div className="social-icon">
                {social.map((socialIcon) => {
                  const { id, icon } = socialIcon;
                  return (
                    <div key={id}>
                      {icon}
                    </div>
                  );
                })}
              </div>
              <div>
                <h5>
                  &copy;
                  {new Date().getFullYear()}
                  {' '}
                  <span>J.N.J.O</span>
                </h5>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default Sidebar;
