import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Shop/SliderArow";
import hero1 from "../../assets/images/Shop/hero1.jpg";
import hero2 from "../../assets/images/Shop/hero2.jpg";
import axios from "axios";
// import hero3 from '../../assets/images/Shop/hero3.jpg'; // Add more hero images as needed
// import hero4 from '../../assets/images/Shop/hero4.jpg';

function CenterBanner({ products, setProducts, fetchAgain }) {
  const [currentShop, setCurrentShop] = useState("");
  const [shops, setShops] = useState(null);
  const [shop, setShop] = useState(null);

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/shops/all-shops")
      .then((res) => {
        console.log(res.data);
        setShops(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const shopImages = {
    shop1: [hero1, hero1],
    shop2: [hero2, hero2],
    shop3: [hero1, hero1],
    shop4: [hero2, hero2],
  };

  const handleShopChange = (event) => {
    setCurrentShop(event.target.value);
  };

  const filterShop = () => {
    if (currentShop !== "") {
      // setProducts(fetchAgain());
      console.log(products);
      setProducts(
        products.filter((product) => {
          return product.shop_id === Number(currentShop);
        })
      );
      console.log(products);
      setShop(
        shops.filter((shop) => {
          return shop.id === Number(currentShop);
        })
      );
      // console log
      console.log(
        products.filter((product) => {
          console.log(product, "nahom");
          return product.shop_id === Number(currentShop) && console.log(true);
        })
      );
    }

    console.log(
      products.filter((product) => {
        console.log(product, "nahom");
        return product.shop_id === Number(currentShop) && console.log(true);
      })
    );
    console.log(currentShop);
  };

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
    className: "w-full",
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded shadow hidden">
        <label htmlFor="shops" className="block text-gray-700">
          Our Shops
        </label>
        <select
          id="shops"
          value={currentShop}
          className="p-2 border rounded mt-1"
          onChange={(e) => {
            handleShopChange(e);
          }}
        >
          <option value="" disabled>
            select shop
          </option>
          {shops &&
            shops.map((shop, index) => {
              return (
                <option key={index} value={shop.id}>
                  {shop.name}
                </option>
              );
            })}
        </select>
        <button onClick={filterShop} className="px-2 py-1 mt-1 rounded-sm">
          filter
        </button>
      </div>
      <Slider {...settings}>
        {shop
          ? shop.map((shop, index) => {
              return (
                currentShop === shop.id && (
                  <div
                    key={index}
                    className="relative overflow-hidden shadow-lg cursor-pointer"
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={shop.image}
                      alt={`Hero ${index + 1}`}
                    />
                  </div>
                )
              );
            })
          : shopImages["shop1"].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  className="object-cover w-full h-full"
                  src={image}
                  alt="banner"
                />
              </div>
            ))}
      </Slider>
    </div>
  );
}

export default CenterBanner;
