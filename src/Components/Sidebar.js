import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navlinks from './Navlinks';
import social from '../Utils/social';
import Logo from '../Utils/glamping.png'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
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
                alt="Logo image"
                className='logo-img'
              />
            </div>

            <Navlinks />

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
