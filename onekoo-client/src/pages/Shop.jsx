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
      .get(`https://back.onekoocoffee.com/api/products/get-all`) // Replace with your API endpoint
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
      .get(`https://back.onekoocoffee.com/api/products/get-all`) // Replace with your API endpoint
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
      {/* Desktop and Tablet View */}
      <div className="hidden md:block bg-white">
        <BigBanner />
        <div className="my-4 w-[1200px] justify-center flex flex-col ml-[10rem]">
          <div className="my-4 w-[1200px] justify-center flex flex-row">
            <Filter
              products={products}
              fetchAgain={fetchAgain}
              setProducts={setProducts}
            />
            <div className="flex flex-col">
              <div className="w-[1000px] h-[100px] mt-16 px-8">
                <CenterBanner
                  products={products}
                  setProducts={setProducts}
                  fetchAgain={fetchAgain}
                />
              </div>
              <div>
                <Product products={products} addToCart={addToCart} />
              </div>
            </div>
            <div>
              <Cart cart={cart} />
            </div>
          </div>
          <hr className="mt-10 border-golden" />
          <div className="my-4 mt-[1rem] w-[1200px] justify-center flex flex-row">
            <LeftAd />
            <div className="flex flex-col">
              <div className="w-[800px] h-[100px] mt-16 px-1">
                <AdBanner />
              </div>
              <div>
                <SpecialProduct />
              </div>
            </div>
            <RightAd />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <BigBanner />
        <div className="mb-4 mt-[-5rem] px-4">
          <div className="flex justify-between mb-4 gap-4 w-auto">
            <div className="w-[50%]">
              <Filter />
            </div>
            <div className="w-[50%]">
              <Cart />
            </div>
          </div>
          <div className="mb-4">
            <CenterBanner />
          </div>
          <div className="mb-4 mt-[-30rem]">
            <Product addToCart={addToCart} />
          </div>
          <div className="flex justify-between gap-4">
            <LeftAd />
            <RightAd />
          </div>
          <div className="mb-4 mt-[10rem]">
            <SpecialProduct />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
