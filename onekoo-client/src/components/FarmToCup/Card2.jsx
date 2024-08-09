import React from "react";
import { motion } from "framer-motion";

const Card2 = () => {
  const style = {
    clipPath: "polygon(0 40%, 30% 0, 100% 0, 100% 100%, 30% 100%, 0 60%)",
  };

  return (
    <div className="max-w-[948px] mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 max-md:flex-col max-md:gap-0"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col self-stretch px-5 my-auto font-semibold text-primary max-md:mt-10 p-8 rounded-lg shadow-md">
            <div className="text-4xl text-center text-primary">PROCESSING</div>
            <div className="mt-7 text-base text-primary">
              After the coffee cherries are harvested, they undergo processing,
              which includes removing the pulp and skin to extract the coffee
              beans. Modern technology and innovative processes are employed to
              ensure high-quality output during the processing stage.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
        >
          <motion.div
            loading="lazy"
            // srcSet="..."
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grow w-full aspect-[1.47] bg-secondary max-md:mt-10 rounded-lg shadow-lg"
            style={style}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card2;
