import React from "react";
import "./Userbutton.css"; // Make sure this path matches your actual CSS file path

const Button = ({ handleSubmit }) => {
  return (
    <button
      className="px-2 py-3"
      onClick={() => {
        handleSubmit();
      }}
    >
      Login
      <div className="arrow-wrapper">
        <div className="arrow w-[100px]"></div>
      </div>
    </button>
  );
};

export default Button;
