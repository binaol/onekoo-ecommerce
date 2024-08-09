import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { SampleNextArrow, SamplePrevArrow } from "../Involve/SliderArow";

function Carousel2({ images }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("YOUR_API_ENDPOINT")
  //     .then((response) => {
  //       setImages(response.data.images); // Adjust this based on your API response structure
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the images!", error);
  //       setLoading(false);
  //     });
  // }, []);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: "w-full",
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="slider-container mx-auto text-center mb-8 px-4">
      <Slider {...settings}>
        {images &&
          images.map((img, index) => {
            return (
              <div key={index} className="px-2">
                <img
                  className="w-[25rem] h-[12rem] object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={`https://back.onekoocoffee.com/images/${img}`} // Adjust this based on your API response structure
                  alt={`carousel-img-${index}`}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Carousel2;
