import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Contact/SliderArow";
import hero from '../../assets/images/Contact/hero1.jpg';
import hero1 from '../../assets/images/Contact/hero2.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: "w-full" // Adjusted to ensure the slider container scales properly
  };

  return (
    <div className="relative overflow-hidden w-full h-auto">
      <Slider {...settings}>
        <div className="relative overflow-hidden cursor-pointer">
          <img className="object-cover w-full h-[30rem] md:h-[35rem]" src={hero} alt="Hero 1" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
            <h4 className="text-lg md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white text-center">
              Contact Us
            </h4>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <img className="object-cover w-full h-[30rem] md:h-[35rem]" src={hero1} alt="Hero 2" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
            <h4 className="text-lg md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white text-center">
              Contact Us
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
