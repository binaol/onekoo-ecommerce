import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BigBanner from "../components/Shop/Big Banner";
import Filter from "../components/Shop/Filter";
import CenterBanner from "../components/Shop/CenterBanner";
import Cart from "../components/Shop/Cart";
import Product from "../components/Shop/Product";
import SpecialProduct from "../components/Shop/SpecialProduct";
import LeftAd from "../components/Shop/LeftAd";
import RightAd from "../components/Shop/RightAd";
import AdBanner from "../components/Shop/AdBanner";

const Shop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/products/get-all") // Replace with your API endpoint
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setIsAuth(true);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsAuth(false);
        navigate("/account");
      });
  }, []);

  const fetchAgain = () => {
    axios
      .get("https://back.onekoocoffee.com/api/products/get-all") // Replace with your API endpoint
      .then((response) => {
        console.log(
          response.data.products.filter((product) => {
            return product.category_id === 1;
          })
        );
        setProducts(response.data.products);
        return response.data.products;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  return (
    <React.Fragment>
      <div className="bg-white">
        <BigBanner />
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Cart section */}
          <div className="md:flex md:justify-between md:items-center md:my-4">
            <div className="mb-4 md:w-1/3">
              <Filter products={products} fetchAgain={fetchAgain} />
            </div>
            <div className="mb-4 md:w-1/3">
              <Cart cart={cart} />
            </div>
          </div>

          {/* Center Banner section */}
          <CenterBanner
            products={products}
            setProducts={setProducts}
            fetchAgain={fetchAgain}
          />

          {/* Product section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Product products={products} addToCart={addToCart} />
          </div>

          {/* Ad Banners section */}
          <div className="md:flex md:justify-between md:items-center md:my-4">
            <div className="mb-4 md:w-1/3">
              <LeftAd />
            </div>
            <div className="mb-4 md:w-1/3">
              <RightAd />
            </div>
          </div>

          {/* Special Product section */}
          <SpecialProduct />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
