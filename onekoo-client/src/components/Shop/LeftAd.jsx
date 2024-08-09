import React from "react";
import hero from '../../assets/images/Shop/hero.jpeg';

function LeftAd() {
  return (
    <div className="slider-container w-full sm:w-[300px] h-[20rem] mt-0 sm:mt-[0rem]">
      <div className="relative overflow-hidden shadow-lg shadow-white cursor-pointer">
        <img className="object-cover w-full h-[20rem] mt-[7rem] sm:mt-0" src={hero} alt="Flower and sky" />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="mt-[6rem] ml-[2rem] sm:ml-[28rem] shadow-lg bg-primary bg-opacity-30 p-8 rounded-2xl text-[2rem] sm:text-[8rem] font-semibold tracking-tight text-white">
            Ad
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LeftAd;
