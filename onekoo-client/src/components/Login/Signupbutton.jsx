import React from "react";
import "./Userbutton.css";
import { Link } from "react-router-dom"; // Make sure this path matches your actual CSS file path

const Button = () => {
  return (
    <Link to="/signup">
      <button className="px-2 py-3">
        Sign up
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </Link>
  );
};

export default Button;
