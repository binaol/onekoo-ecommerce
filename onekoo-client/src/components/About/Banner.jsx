import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../About/SliderArow";
import hero from "../../assets/images/About/hero1.jpg";
import hero1 from "../../assets/images/About/hero2.jpg";

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
    className: "w-inherit",
  };

  return (
    <div className="slider-container w-full md:h-[35rem] mt-[-4.3rem] mb-10">
      <Slider {...settings}>
        <div className="relative overflow-hidden shadow-lg shadow-white cursor-pointer">
          <img
            className="object-cover w-full h-[35rem] mt-[-4.3rem]"
            src={hero}
            alt="Flower and sky"
          />

          <div className="absolute top-16 left-16 md:top-0 md:left-0 px-6 py-4">
            <h4 className="mt-24 ml-16 md:mt-24 md:ml-96 lg:mt-24 lg:ml-[28rem] shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl text-4xl md:text-6xl lg:text-[8rem] font-semibold tracking-tight text-white">
              About Us
            </h4>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-lg shadow-white cursor-pointer">
          <img
            className="object-cover w-full h-[35rem] mt-[-4.3rem]"
            src={hero1}
            alt="Flower and sky"
          />
          <div className="flex justify-center items-center">
            <div className="absolute top-16 left-16 md:top-0 md:left-0 px-6 py-4">
              <h4 className="mt-24 ml-16 md:mt-24 md:ml-96 lg:mt-24 lg:ml-[28rem] shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl text-4xl md:text-6xl lg:text-[8rem] font-semibold tracking-tight text-white">
                About Us
              </h4>
            </div>
          </div>
        </div>
        {/* <div className="relative overflow-hidden cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={hero}
            alt="Shop Hero 1"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-4 text-center">
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white">
              About Us
            </h4>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={hero1}
            alt="Shop Hero 2"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-4 text-center">
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl shadow-lg bg-primary bg-opacity-30 p-4 md:p-8 rounded-2xl font-semibold tracking-tight text-white">
              About Us
            </h4>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default Banner;
