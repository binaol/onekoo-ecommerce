// src/App.js
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Nav";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import Shop from "./pages/Shop";
import Cart from "./components/Shop/Cart";
import About from "./pages/About";
import FarmToCup from "./pages/FarmToCup";
import Involve from "./pages/Involve";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Checkout from "./components/Shop/Checkout";
import Account from "./pages/Account";
import SignUp from "./components/Login/SignUp";
import AdminPage from "./pages/AdminPage";
import Adminlogin from "./pages/Adminlogin";
import UserProfile from "./pages/UserProfile";
import LaunchModal from "./components/LaucnhModal";
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Automatically close the modal after a certain time (optional)
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 10000); // Close modal after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App font-Garamond">
      <LaunchModal isOpen={isModalOpen} onRequestClose={closeModal} />
      {!isModalOpen && <Navbar />}
      <Routes>
        <Route path={"/"} element={!isModalOpen ? <ThreeScene /> : null} />
        <Route path={"/home"} element={!isModalOpen ? <ThreeScene /> : null} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/farm-to-cup"} element={<FarmToCup />} />
        <Route path={"/achievement-and-involvement"} element={<Involve />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/account"} element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path={"/profile"} element={<UserProfile />} />
        <Route path="/admin-login" element={<Adminlogin />} />
      </Routes>
      {!isModalOpen && <Footer />}
    </div>
  );
}

export default App;
