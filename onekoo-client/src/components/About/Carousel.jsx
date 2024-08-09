// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
// import "./AcStyle.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { SampleNextArrow, SamplePrevArrow } from "./SliderArow";
// import dejene from '../../assets/images/About/dejene.png'
// import dereje from '../../assets/images/About/dereje.png'

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     className: "w-inherit",
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     rtl: true
//   };

//   return (
//     <React.Fragment>
//         <div className="slider-container text-center mb-8">
//         <h2 className="text-4xl text-primary pb-8 font-semibold">Our Team</h2>
//         <Slider {...settings}>
//             <div>
//             <div className="canvas-wrapper">
//                     <a href="#" className="canvas">
//                         <div className="canvas_border">
//                         <svg>
//                             <defs>
//                             <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
//                                 <stop
//                                 offset="0%"
//                                 style={{ stopColor: "rgb(253,137,68)", stopOpacity: 1 }}
//                                 />
//                                 <stop
//                                 offset="100%"
//                                 style={{ stopColor: "rgb(153,75,23)", stopOpacity: 1 }}
//                                 />
//                             </linearGradient>
//                             <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
//                                 <stop offset="0%" stopColor="#D34F48" />
//                                 <stop offset="100%" stopColor="#772522" />
//                             </linearGradient>
//                             </defs>
//                             <rect
//                             id="rect-grad"
//                             className="rect-gradient"
//                             fill="none"
//                             stroke="url(#grad-orange)"
//                             strokeLinecap="square"
//                             strokeWidth={4}
//                             strokeMiterlimit={30}
//                             width="100%"
//                             height="100%"
//                             />
//                         </svg>
//                         </div>
//                         <div className="canvas_img-wrapper">
//                         <img
//                             className="canvas_img"
//                             src={dejene}
//                             alt=""
//                         />
//                         </div>
//                         <div className="canvas_copy">
//                         <span className="canvas_copy_subtitle">Dejene Dadi</span>
//                         <strong className="canvas_copy_title">General Manager</strong>
//                         <strong className="canvas_copy_title">dejenedadi@gmail.com</strong>
//                         <span className="canvas_copy_details"> +251-911-60-71-21</span>
//                         </div>
//                     </a>
//                 </div>
//             </div>

//             <div>
//             <div className="canvas-wrapper">
//                     <a href="#" className="canvas">
//                         <div className="canvas_border">
//                         <svg>
//                             <defs>
//                             <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
//                                 <stop
//                                 offset="0%"
//                                 style={{ stopColor: "rgb(253,137,68)", stopOpacity: 1 }}
//                                 />
//                                 <stop
//                                 offset="100%"
//                                 style={{ stopColor: "rgb(153,75,23)", stopOpacity: 1 }}
//                                 />
//                             </linearGradient>
//                             <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
//                                 <stop offset="0%" stopColor="#D34F48" />
//                                 <stop offset="100%" stopColor="#772522" />
//                             </linearGradient>
//                             </defs>
//                             <rect
//                             id="rect-grad"
//                             className="rect-gradient"
//                             fill="none"
//                             stroke="url(#grad-orange)"
//                             strokeLinecap="square"
//                             strokeWidth={4}
//                             strokeMiterlimit={30}
//                             width="100%"
//                             height="100%"
//                             />
//                         </svg>
//                         </div>
//                         <div className="canvas_img-wrapper">
//                         <img
//                             className="canvas_img"
//                             src={dereje}
//                             alt=""
//                         />
//                         </div>
//                         <div className="canvas_copy">
//                         <span className="canvas_copy_subtitle">Dereje Hirpa</span>
//                         <strong className="canvas_copy_title">Coffee Quality Control & Extension Department Head</strong>
//                         <strong className="canvas_copy_title">derejehirpa@gmail.com</strong>
//                         <span className="canvas_copy_details"> +251-911372323</span>
//                         </div>
//                     </a>
//                 </div>
//             </div>

//         </Slider>
//         </div>
//     </React.Fragment>
//   );
// };

// export default Carousel;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./AcStyle.css";
import { FaShoppingCart } from "react-icons/fa";
import { SampleNextArrow, SamplePrevArrow } from "./SliderArow";
import dejene from "../../assets/images/About/dejene.png";
import dereje from "../../assets/images/About/dereje.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    className: "w-inherit",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    rtl: true,
  };

  return (
    <React.Fragment>
      <div className="slider-container text-center">
        <h2 className="text-4xl text-primary pb-8 font-semibold">Our Team</h2>
        <Slider {...settings}>
          <div>
            <div className="canvas-wrapper">
              <a href="#" className="canvas">
                <div className="canvas_border">
                  <svg>
                    <defs>
                      <linearGradient
                        id="grad-orange"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(253,137,68)",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgb(153,75,23)",
                            stopOpacity: 1,
                          }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="grad-red"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#D34F48" />
                        <stop offset="100%" stopColor="#772522" />
                      </linearGradient>
                    </defs>
                    <rect
                      id="rect-grad"
                      className="rect-gradient"
                      fill="none"
                      stroke="url(#grad-orange)"
                      strokeLinecap="square"
                      strokeWidth={4}
                      strokeMiterlimit={30}
                      width="100%"
                      height="100%"
                    />
                  </svg>
                </div>
                <div className="canvas_img-wrapper">
                  <img className="canvas_img" src={dejene} alt="Dejene Dadi" />
                </div>
                <div className="canvas_copy">
                  <span className="canvas_copy_subtitle">Dejene Dadi</span>
                  <strong className="canvas_copy_title">General Manager</strong>
                  <strong className="canvas_copy_title">
                    dejenedadi@gmail.com
                  </strong>
                  <span className="canvas_copy_details">+251-911-60-71-21</span>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="canvas-wrapper">
              <a href="#" className="canvas">
                <div className="canvas_border">
                  <svg>
                    <defs>
                      <linearGradient
                        id="grad-orange"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(253,137,68)",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgb(153,75,23)",
                            stopOpacity: 1,
                          }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="grad-red"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#D34F48" />
                        <stop offset="100%" stopColor="#772522" />
                      </linearGradient>
                    </defs>
                    <rect
                      id="rect-grad"
                      className="rect-gradient"
                      fill="none"
                      stroke="url(#grad-orange)"
                      strokeLinecap="square"
                      strokeWidth={4}
                      strokeMiterlimit={30}
                      width="100%"
                      height="100%"
                    />
                  </svg>
                </div>
                <div className="canvas_img-wrapper">
                  <img className="canvas_img" src={dereje} alt="Dereje Hirpa" />
                </div>
                <div className="canvas_copy">
                  <span className="canvas_copy_subtitle">Dereje Hirpa</span>
                  <strong className="canvas_copy_title">
                    Coffee Quality Control & Extension Department Head
                  </strong>
                  <strong className="canvas_copy_title">
                    derejehirpa@gmail.com
                  </strong>
                  <span className="canvas_copy_details">+251-911-372-323</span>
                </div>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
