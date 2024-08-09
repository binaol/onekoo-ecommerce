import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../FarmToCup/SliderArow";
import hero from "../../assets/images/FarmtoCup/hero1.jpg";
import hero1 from "../../assets/images/FarmtoCup/hero2.jpg";

function Banner() {
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
    className: "w-full", // Ensures the slider takes full width
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div className="relative overflow-hidden shadow-lg shadow-white">
          <img
            className="object-cover w-full h-auto"
            src={hero}
            alt="Flower and sky"
          />
          <div className="flex justify-center items-start md:items-center">
            <div className="absolute left-0 w-full flex justify-center items-center pt-36 px-6 py-4">
              <h4 className="mt-10 md:mt-24 ml-6 md:ml-28 w-fit text-4xl md:text-7xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl text-white font-semibold tracking-tight">
                Farm To Cup
              </h4>
            </div>
          </div>
        </div> */}
        <div className="relative overflow-hidden shadow-lg shadow-white">
          <img
            className="object-cover w-full h-auto"
            src={hero1}
            alt="Flower and sky"
          />
          <div className="absolute -top-20 md:top-0 left-0 w-full flex justify-center items-center pt-36 px-6 py-4">
            <h4 className="mt-10 md:mt-24 ml-6 md:ml-28 w-fit text-4xl md:text-7xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl text-white font-semibold tracking-tight">
              Farm To Cup2
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
