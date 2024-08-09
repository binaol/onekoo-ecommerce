import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ products, addToCart }) => {
  return (
    <React.Fragment>
      {/* row1 */}
      <div className="flex flex-col mt-[22rem]">
        <div className="grid grid-cols-4 justify-between gap-y-2 md:flex-row flex-wrap">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="px-4 mx-1 basis-[200px] max-width-[300px] flex-1"
              >
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
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="card-btn p-5"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* row2 */}
        {/* <div className="flex flex-col md:flex-row mt-4">
          {products.slice(4).map((product, index) => (
            <div key={index} className="px-4 mx-1">
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
          ))}
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Cart;
