import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { SampleNextArrow, SamplePrevArrow } from "./SliderArow";

const Carousel = () => {  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "w-inherit",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    rtl: true
  };

  return (
    <React.Fragment>
      <div className="slider-container my-8 w-auto mx-20">
        {/* <h2>Right to Left</h2> */}
        <Slider {...settings}>
          <div>
            <div className="card">
              <div className="card-img">
                <img src="https://picsum.photos/id/237/200/300" alt="" />
              </div>
              <div className="card-title">Product title</div>
              <div className="card-subtitle">
                Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </div>
              <hr className="card-divider" />
              <div className="card-footer">
                <div className="card-price">
                  <span>$</span> 123.45
                </div>
                <button className="card-btn"><FaShoppingCart /></button>
              </div>
            </div>
          </div>
                <div>
                      <div className="card">
                        <div className="card-img">
                          <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                          Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                          <div className="card-price">
                            <span>$</span> 123.45
                          </div>
                          <button className="card-btn"><FaShoppingCart /></button>
                        </div>
                      </div>
                </div>
                <div>
                      <div className="card">
                        <div className="card-img">
                          <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                          Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                          <div className="card-price">
                            <span>$</span> 123.45
                          </div>
                          <button className="card-btn"><FaShoppingCart /></button>
                        </div>
                      </div>
                </div>
                <div>
                      <div className="card">
                        <div className="card-img">
                          <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                          Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                          <div className="card-price">
                            <span>$</span> 123.45
                          </div>
                          <button className="card-btn"><FaShoppingCart /></button>
                        </div>
                      </div>
                </div>
                <div>
                      <div className="card">
                        <div className="card-img">
                          <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                          Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                          <div className="card-price">
                            <span>$</span> 123.45
                          </div>
                          <button className="card-btn"><FaShoppingCart /></button>
                        </div>
                      </div>
                </div>
                <div>
                      <div className="card">
                        <div className="card-img">
                          <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                          Product description. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                          <div className="card-price">
                            <span>$</span> 123.45
                          </div>
                          <button className="card-btn"><FaShoppingCart /></button>
                        </div>
                      </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
