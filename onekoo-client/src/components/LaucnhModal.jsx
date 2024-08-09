import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import "./LaunchModal.css"; // Import the CSS file
import logo from "../assets/images/onekoo_logo_brown.png";

const LaunchModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="ModalContent object-none">
        <motion.img
          src={logo}
          alt="Onekoo Logo"
          className="w-[20%] h-[20%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: { delay: 0.5, duration: 1, ease: "easeInOut" },
            opacity: { delay: 0.5, duration: 0.5 },
          }}
        />
        <h2>Welcome to Our Website!</h2>
        <p className="text-start">
          We're delighted to have you here. Navigating through our site is
          simple and intuitive, ensuring that you can find what you're looking
          for with ease.
        </p>
        <p className="text-start">
          <strong>Navigation Made Easy:</strong> Use the buttons in the header
          to quickly jump to different sections of our website. Each button is
          clearly labeled, guiding you directly to the content you need.
        </p>
        <p className="text-start">
          <strong>Icon-Based (sini ሲኒ) Navigation:</strong> Prefer using icons?
          Simply click or tap on the icons throughout the site. These icons are
          designed to represent different sections or features, taking you
          directly to the related pages.
        </p>
        <p className="text-start">
          We strive to make your experience smooth and enjoyable. If you have
          any questions or need assistance, don't hesitate to reach out. Enjoy
          exploring our website!
        </p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default LaunchModal;
