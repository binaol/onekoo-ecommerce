import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SpecialProduct.css'; // Import custom CSS

// Sample images
import Coffee from './coffee/images/coffeepic.jpg';

function SpecialProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch data from backend using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://back.onekoocoffee.com/products'); // Replace with your API endpoint
        setProducts(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        onClick={onClick}
      />
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        onClick={onClick}
      />
    );
  }

  // Define motion variants for grid items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="grid-container">
              <motion.div className="grid-item" variants={itemVariants}>
                <img src={product.image} alt={`Image ${index + 1}`} />
                <div className="item-details">
                  <p>Name: {product.name}</p>
                  <p>Description: {product.description}</p>
                  <p>Price: ${product.price}</p>
                  <motion.button className="add-to-cart-btn" whileHover={{ backgroundColor: "#59200c" }}>
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpecialProduct;
