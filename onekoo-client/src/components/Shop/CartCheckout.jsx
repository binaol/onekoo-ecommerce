import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import productImage from "../../../src/assets/images/Shop/natural.png";

const CartCheckout = ({ cart }) => {
  const [myCart, setMyCart] = useState(cart);
  console.log(myCart);

  // useEffect(() => {
  //   axios
  //     .get("https://back.onekoocoffee.com/api/product") // placeholder endpoint url-- we'll be replace with the correct url
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("There is an error fetching the data", error);
  //     });
  // });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8803/api/product")
  //     .then((res) => {
  //       setMoreProducts(
  //         res.data.filter((product) => product.cat === currentProduct.cat)
  //       );
  //     })
  //     .catch((error) => {
  //       console.log("There is an error fetching the data");
  //     });
  // });

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.6 },
  //   },
  // };

  // function handleClick() {
  //   if (!isMoreProductListed) {
  //     setMoreProducts([
  //       {
  //         name: "Jordan",
  //         details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel
  //           doloremque sint perspiciatis, dicta dolor assumenda in non maxime
  //           quibusdam.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.`,
  //         image: productImage,
  //         cat: "Shoe",
  //       },
  //       {
  //         name: "Anekoo",
  //         details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel
  //           doloremque sint perspiciatis, dicta dolor assumenda in non maxime
  //           quibusdam.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.`,
  //         image: productImage,
  //         cat: "Coffee",
  //       },
  //       {
  //         name: "Allstar",
  //         details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel
  //           doloremque sint perspiciatis, dicta dolor assumenda in non maxime
  //           quibusdam.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.`,
  //         image: productImage,
  //         cat: "Shoe",
  //       },
  //       {
  //         name: "TimberLand",
  //         details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel
  //           doloremque sint perspiciatis, dicta dolor assumenda in non maxime
  //           quibusdam.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.`,
  //         image: productImage,
  //         cat: "Shoe",
  //       },
  //       {
  //         name: "Anekoo",
  //         details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel
  //           doloremque sint perspiciatis, dicta dolor assumenda in non maxime
  //           quibusdam.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dicta
  //           iusto explicabo voluptates.`,
  //         image: productImage,
  //         cat: "Coffee",
  //       },
  //     ]);
  //   } else {
  //     setMoreProducts(null);
  //   }
  //   setIsMoreProductsListed(!isMoreProductListed);
  // }

  // if (!currentProduct) {
  //   return (
  //     <div>
  //       <h1 className=" text-secondary font-bold mb-6 font-serif text-2xl">
  //         CHECKOUT CART
  //       </h1>
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <header>
      <div className="w-[95%] md:w-[80%] m-auto">
        <h1 className=" text-secondary font-bold mb-6 font-serif text-2xl">
          CHECKOUT CART
        </h1>
        {myCart &&
          myCart.map((product, index) => {
            return (
              <div key={index} className="">
                <h2 className="text-left w-full m-auto md:w-full text-lg mb-3 font-serif font-semibold text-secondary">
                  Product{" "}
                  <span className="p-y-1 px-3 rounded-lg text-white bg-secondary">
                    {product.name}
                  </span>
                </h2>
                <div className="flex flex-col items-center md:items-stretch md:flex-row gap-4 w-full lg:h-[450px]">
                  <div className="w-full md:w-[60%] overflow-hidden">
                    <img
                      className=" object-cover w-full h-full rounded-lg bg-orange-800"
                      src={`https://back.onekoocoffee.com/images/${product.image_url}`}
                      alt="Product IMG"
                    />
                  </div>
                  <div className="w-full md:w-[40%]">
                    <div className="flex flex-col gap-y-1 rounded-xl bg-secondary p-5 shadow-2xl shadow-orange-400 h-full">
                      <h1 className="p-2 mb-[1px] rounded-xl text-center text-xl text-secondary bg-[#cd804a] font-semibold font-serif">
                        Product Detail
                      </h1>
                      <p className="text-center flex-grow font-serif p-1 rounded-xl text-secondaryc bg-[#cd804a]">
                        {product.description}
                      </p>
                      <p className="text-lg font-bold text-secondary mt-2 p-2 bg-[#cd804a] rounded-lg">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div className=" mt-10">
          <h1 className="text-2xl mb-5 font-medium text-[#612203]">
            Other related Products
          </h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {!moreProducts && <span>No more related products</span>}
            {moreProducts &&
              moreProducts
                .filter((product) => product.cat === currentProduct.cat)
                .map((product, index) => {
                  return (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.7,
                            delay: index * 0.3,
                          },
                        },
                      }}
                      key={index}
                    >
                      <div className="rounded-md overflow-hidden shadow-lg shadow-orange-800">
                        <div>
                          <img src={product.image} alt="" />
                        </div>
                        <div className="bg-secondary px-3 py-2 text-white">
                          <h1 className="text-left text-xl mt-2">
                            {product.name}
                          </h1>
                          <p className="text-left text-sm">{`${product.details.slice(
                            0,
                            50
                          )}...`}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
          </motion.div>
          <button
            onClick={handleClick}
            className="px-4 py-2 font-mono mt-6 rounded-md bg-secondary text-white"
          >
            {isMoreProductListed ? "Show Less" : "Show More"}
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default CartCheckout;
