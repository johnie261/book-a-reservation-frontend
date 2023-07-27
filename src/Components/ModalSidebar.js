import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navlinks from './Navlinks';

const ModalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
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
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ModalSidebar;
