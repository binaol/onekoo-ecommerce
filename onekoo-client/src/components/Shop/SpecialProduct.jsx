import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";

const SpecialProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/products/get-all") // Replace with your API endpoint
      .then((response) => {
        setProducts(
          response.data
            .filter((product) => {
              return product.category_id === 2;
            })
            .slice(0, 10)
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row flex-wrap mt-[5rem] md:mt-[30rem] space-y-4 md:space-y-0">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-y-1 basis-[400px] max-width-[500px] flex-grow-0 flex-shrink"
          >
            <div className="px-2 md:px-4 mx-1 w-full md:w-auto">
              <div className="card">
                <div className="card-img">
                  <img
                    src={`https://back.onekoocoffee.com/images/${product.image_url}`}
                    alt={product.title}
                  />
                </div>
                <div className="card-title">{product.title}</div>
                <div className="card-subtitle">{product.description}</div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> {product.price}
                  </div>
                  <button className="card-btn">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* {products.map((product, index) => (
          <div key={index} className="flex flex-col md:flex-row mt-4">
            <div className="px-2 md:px-4 mx-1 w-full md:w-auto">
              <div className="card">
                <div className="card-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-title">{product.title}</div>
                <div className="card-subtitle">{product.description}</div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> {product.price}
                  </div>
                  <button className="card-btn">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </React.Fragment>
  );
};

export default SpecialProduct;
