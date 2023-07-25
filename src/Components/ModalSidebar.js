import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navlinks from './Navlinks';
import { logout } from '../store/actions/userActions';

const ModalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="modal-container">
      <button
        type="button"
        className="modal-btn"
        onClick={handleOpenModal}
      >
        <FaBars />
      </button>

      {isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button
            type="button"
            className="modal-close"
            onClick={handleCloseModel}
          >
            <FaTimes />
          </button>

          <div className="modal-content">
            <Navlinks onClick={handleCloseModel} />
            {username !== 'guest' && (
              <button type="button" onClick={handleLogout} className="logout-button">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ModalSidebar;
