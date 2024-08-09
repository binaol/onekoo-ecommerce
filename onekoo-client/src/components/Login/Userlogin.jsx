// Userlogin.js

import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Button from "./Signupbutton"; // Adjust the path as per your project structure
import LoginButton from "./Loginbutton"; // Import LoginButton component
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://back.onekoocoffee.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("Login successful:", response.data);
      navigate("/home");

      // Handle successful login (e.g., redirect, set user session)
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to login. Please try again."); // Example error handling
    } finally {
      setLoading(false);
    }
  };

  const styleL = {
    clipPath: "polygon(0px 0px, 100% 0px, 82% 100%, 0px 100%)",
    display: "flex",
    flexDirection: "column",
  };

  const styleR = {
    clipPath: "polygon(11% 0px, 100% 0px, 100% 100%, 0% 100%)",
  };

  return (
    <div className="flex flex-col justify-center items-start py-20 font-semibold whitespace-nowrap bg-white max-md:pr-5">
      <div className="flex gap-1 justify-between px-2 pt-16 pb-8 mt-80 max-w-full w-[100%] max-md:mt-10">
        {/* Left Section (Login Icon and Title) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col p-8 bg-yellow-900 w-[40%] text-5xl text-white"
          style={styleL}
        >
          <div className="bg-white rounded-full h-[129px] w-[129px] mx-auto mb-2.5" />
          <div className="mt-2.5 text-center">Login</div>
        </motion.div>

        {/* Right Section (Username, Password, Signup, Login) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col p-8 pl-[3rem] md:pl-[8rem] bg-yellow-900 mt-1 w-[60%] text-lg md:text-2xl text-yellow-900 space-y-4"
          style={styleR}
        >
          {/* Username Field */}
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleUsernameChange}
            className="px-1 py-1 md:px-3 md:py-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent max-md:w-[calc(100% - 2rem)] max-md:px-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Password Field */}
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="px-1 py-1 md:px-3 md:py-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent max-md:w-[calc(100% - 2rem)] max-md:px-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Error Message */}
          {error && (
            <motion.div
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {error}
            </motion.div>
          )}

          {/* Signup and Login Buttons */}
          <div className="flex gap-4 max-md:flex-col max-md:gap-2 max-md:items-start">
            <Button />{" "}
            {/* Replace Signup button with custom Button component */}
            <LoginButton handleSubmit={handleSubmit} loading={loading} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Userlogin;
