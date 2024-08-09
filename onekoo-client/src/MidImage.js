import React from "react";
import Slider from "react-slick";
import Coffee from './coffee/images/coffee.jpg';
import './MidImage.css'; // Ensure to create and import this CSS file

function MidImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Add this line to remove arrows
  };

  return (
    <div className="mid-image-wrapper">
      <div className="header">
        <h2>CRS Initiatives</h2>
        <p className="header-description">
          This is a description of the CRS initiatives. It provides additional information and context about the carousel content.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={Coffee} alt="Image 1" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={Coffee} alt="Image 2" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={Coffee} alt="Image 3" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={Coffee} alt="Image 4" className="slider-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MidImage;
