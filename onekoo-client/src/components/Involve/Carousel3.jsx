import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Involve/SliderArow";
import image from '../../assets/images/Involve/1.jpeg';
import image1 from '../../assets/images/Involve/2.jpeg';
import image2 from '../../assets/images/Involve/3.jpeg';
import image3 from '../../assets/images/Involve/4.jpeg';
import image4 from '../../assets/images/Involve/5.jpeg';
import image5 from '../../assets/images/Involve/6.jpeg';
import image6 from '../../assets/images/Involve/7.jpeg';
import image7 from '../../assets/images/Involve/8.jpeg';
import image8 from '../../assets/images/Involve/9.jpeg';

function Carousel3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: "w-full",
  };
  const style = {
    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
  };

  return (
    <div className="slider-container mx-auto text-center mb-8 px-4">
      <Slider {...settings}>
        {[image, image1, image2, image3, image4, image5, image6, image7, image8].map((img, index) => (
          <div key={index} className="px-2">
            <img 
              className="w-[25rem] h-[12rem] object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" 
              src={img} 
              alt={`carousel-img-${index}`} 
              style={style}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel3;
