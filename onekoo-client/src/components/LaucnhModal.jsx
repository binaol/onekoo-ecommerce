// src/components/LaunchModal.js
import React from "react";
import Modal from "react-modal";
import "./LaunchModal.css"; // Import the CSS file

const LaunchModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal  bg-transparent"
      overlayClassName="Overlay  bg-transparent"
    >
      <div className="ModalContent">
        <h2>Welcome!</h2>
        <p>Here is a tutorial for how to use this page</p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default LaunchModal;
