import { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import sini from '../assets/images/sini.png';
import siniHover from '../assets/images/sini-hover.png';
import logo from '../assets/images/logo.png';
import User from "../assets/images/user.jpg";

export default function NavBar() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Set the initial active index to 0 (Home)
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const handleCartClick = () => {
    // handle cart click logic
  };

  const handleUserClick = () => {
    // handle user click logic
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className="w-full px-4 mx-auto text-white lg:px-8  sticky top-0 z-50 border-none bg-brown mb-6 bg-transparent">
      <div className="container max-w-screen-xl flex items-center justify-between mx-auto text-black relative">
        <Link to="/" className={`mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased h-40 w-40 ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <img src={logo} className='h-[10rem] w-[15rem]' alt="..." />
        </Link>

        <div className="lg:hidden absolute top-0 right-0">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`lg:flex flex-row items-center gap-6 justify-center text-center ${menuOpen ? 'flex flex-col mb-0' : 'hidden'}`}>
        {['Home', 'About', 'Farm To Cup','Achievement and involvement', 'Contact', 'Shop'].map((link, index) => (
          <Link key={index} to={`/${index === 0 ? '' : link.toLowerCase().replace(/\s+/g, '-')}`} className={`flex flex-col items-center justify-center mx-10 ${location.pathname === `/${index === 0 ? '' : link.toLowerCase().replace(/\s+/g, '-')}` || activeIndex === index ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleLinkClick(index)}>
            <img src={(hoveredIndex === index || activeIndex === index) ? siniHover : sini} className='h-24 w-24' alt="sini" />
            <span className={`px-4 text-white ${location.pathname === `/${index === 0 ? '' : link.toLowerCase().replace(/\s+/g, '-')}` || activeIndex === index ? '' : ''}`}>{link}</span>
          </Link>
        ))}
      </div>
        <div className="flex items-center gap-4 mb-28">
          <button onClick={handleCartClick}><Link to="/cart"><FaShoppingCart className="h-6 w-6 text-black" /></Link></button>
          <button onClick={handleUserClick}><FaUser className="h-6 w-6 text-black" /></button>
        </div>
      </div>
    </nav>
  );
}
