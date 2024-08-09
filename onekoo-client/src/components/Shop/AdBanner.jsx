import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Shop/SliderArow";
import hero from '../../assets/images/About/hero1.jpg';
import hero1 from '../../assets/images/About/hero2.jpg';

function AdBanner() {
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
    className: "w-full"
  };

  return (
    <div className="slider-container w-full md:w-[750px] mx-auto md:ml-7 h-[20rem] md:h-[35rem] mt-[-2rem]">
      <Slider {...settings}>
        <div className="relative overflow-hidden shadow-lg shadow-white cursor-pointer">
          <img className="object-cover w-full h-[20rem] md:h-[35rem] mt-0" src={hero} alt="Banner 1" />
        </div>
        <div className="relative overflow-hidden shadow-lg shadow-white cursor-pointer">
          <img className="object-cover w-full h-[20rem] md:h-[35rem] mt-0" src={hero1} alt="Banner 2" />
        </div>
      </Slider>
    </div>
  );
}

export default AdBanner;
