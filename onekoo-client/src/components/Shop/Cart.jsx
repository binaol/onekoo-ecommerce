import React from "react";
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <motion.div
        className="text-white text-sm bg-secondary min-w-[300px] max-md:px-5 h-[30rem] p-2 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cart Title */}

        {/* Cart Items */}
        {/* Cart Item 1 */}
        {cart &&
          cart.map((product, index) => {
            return (
              <div>
                <motion.div
                  className="flex gap-4 mt-6 max-md:mt-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <IoCartOutline />
                  <div className="self-start">{product.name}</div>
                </motion.div>
                <motion.div
                  className="mt-2 max-md:max-w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {product.description}
                </motion.div>
              </div>
            );
          })}

        {/* Cart Item 2 */}
        {/* <motion.div
          className="flex gap-4 mt-4 max-md:mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <IoCartOutline />
          <div className="self-start">Item 2</div>
        </motion.div>
        <motion.div
          className="mt-2 max-md:mt-10 max-md:max-w-full"
          whileHover={{ scale: 1.05 }}
        >
          Description of what you want for Item 2
        </motion.div>

        {/* Cart Item 3 */}
        {/* <motion.div
          className="flex gap-4 mt-4 max-md:mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <IoCartOutline />
          <div className="my-auto">Item 3</div>
        </motion.div>
        <motion.div
          className="mt-2 max-md:mt-10 max-md:max-w-full"
          whileHover={{ scale: 1.05 }}
        >
          Description of what you want for Item 3
        </motion.div> */}

        {/* Additional Cart Items */}
        {/* Cart Item 4 */}
        {/* <motion.div
          className="flex gap-4 mt-4 max-md:mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <IoCartOutline />
          <div className="self-start">Item 4</div>
        </motion.div>
        <motion.div
          className="mt-2 max-md:mt-10 max-md:max-w-full"
          whileHover={{ scale: 1.05 }}
        >
          Description of what you want for Item 4
        </motion.div> */}

        {/* Cart Item 5 */}
        {/* <motion.div
          className="flex gap-4 mt-4 max-md:mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <IoCartOutline />
          <div className="self-start">Item 5</div>
        </motion.div>
        <motion.div
          className="mt-2 max-md:mt-10 max-md:max-w-full"
          whileHover={{ scale: 1.05 }}
        >
          Description of what you want for Item 5
        </motion.div> */}

        {/* Cart Item 6 */}
        {/* <motion.div
          className="flex gap-4 mt-4 max-md:mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <IoCartOutline />
          <div className="my-auto">Item 6</div>
        </motion.div>
        <motion.div
          className="mt-2 max-md:mt-10 max-md:max-w-full"
          whileHover={{ scale: 1.05 }}
        >
          Description of what you want for Item 6
        </motion.div>  */}
      </motion.div>
      <button
        onClick={() => {
          navigate("/checkout", { state: cart });
        }}
        className="my-3 p-2 bg-golden border border-primary rounded-xl"
      >
        Checkout
      </button>
    </React.Fragment>
  );
};

export default Cart;
