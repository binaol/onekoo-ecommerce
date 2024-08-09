import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Shop/SliderArow";
import hero from '../../assets/images/Shop/hero1.jpg';
import hero1 from '../../assets/images/Shop/hero2.jpg';

function BigBanner() {
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
    <div className="relative overflow-hidden w-full h-[30rem] md:h-[35rem]">
      <Slider {...settings}>
        <div className="relative overflow-hidden cursor-pointer">
          <img className="object-cover w-full h-full" src={hero} alt="Shop Hero 1" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-4 text-center">
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white">
              Shop
            </h4>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <img className="object-cover w-full h-full" src={hero1} alt="Shop Hero 2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-4 text-center">
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white">
              Shop
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BigBanner;
