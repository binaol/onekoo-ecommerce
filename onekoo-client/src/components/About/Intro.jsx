import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import natural from "../../assets/images/About/establish.png";

const ExpandableParagraph = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Ref and animation control for the text section
  const textRef = React.useRef(null);
  const textInView = useInView(textRef, { once: true });

  // Ref and animation control for the images
  const imageRef = React.useRef(null);
  const imageInView = useInView(imageRef, { once: true });

  return (
    <React.Fragment>
      <motion.div
        className="max-w-[80%] mx-auto my-8 p-4 border-primary rounded-lg text-primary shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: textInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        ref={textRef}
      >
        <h4 className="mb-3 py-4 text-4xl font-semibold font-Garamond tracking-tight text-primary text-center">
          Brief Introduction to ONEKOO Coffee
        </h4>
        <motion.p
          initial={{ height: "auto" }}
          animate={{ height: isExpanded ? "auto" : "6rem" }}
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "h-auto" : "h-24"
          }`}
        >
          Onekoo Coffee is a company deeply rooted in Ethiopian coffee culture,
          committed to providing the finest quality coffee while fostering
          sustainable development and enhancing the lives of coffee farmers and
          communities. The company offers a wide array of premium coffee
          beverages crafted from the finest Ethiopian Arabica beans,
          complemented by a variety of freshly prepared food options. Onekoo
          Coffee aims to create a unique and immersive coffee experience,
          reflecting Ethiopian culture and heritage, while also promoting fair
          trade practices and community development initiatives. The company's
          vision is to be a global leader in the coffee industry, renowned for
          its ethical sourcing, superior coffee products, and positive social
          impact.
        </motion.p>
        <button
          onClick={toggleExpansion}
          className="mt-4 text-white hover:text-primary bg-secondary hover:bg-white rounded-xl p-2 focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </motion.div>

      <div className="max-w-auto mx-auto">
        <div className="flex flex-col md:flex-row gap-5 p-4">
          <div className="flex flex-col w-full md:w-[57%]">
            <motion.div
              className="flex flex-col px-5 text-primary mt-10 md:mt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: imageInView ? 1 : 0,
                x: imageInView ? 0 : -50,
              }}
              transition={{ duration: 1 }}
              ref={imageRef}
            >
              <div className="text-4xl font-semibold">
                History and Establishment
              </div>
              <div className="mt-8 text-xl">
                Onekoo Coffee emerged from a profound commitment to the rich
                heritage of Ethiopian coffee and the desire to uplift local
                coffee farmers. Originating from the Oromia Coffee Farmers'
                Cooperative Union (OCFCU), Onekoo Coffee was established to
                bring the exceptional quality of Ethiopian coffee to the world
                while fostering sustainable development in coffee-growing
                communities. The cooperative's deep-rooted knowledge and passion
                for coffee cultivation have propelled Onekoo Coffee from a local
                initiative to an emerging global brand. The company's mission is
                to provide the finest quality coffee while enhancing the lives
                of coffee farmers and communities, reflecting its dedication to
                ethical sourcing, superior coffee products, and positive social
                impact.
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col w-full md:w-[43%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}
            transition={{ duration: 1 }}
            ref={imageRef}
          >
            <div className="max-w-full">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-6/12">
                  <img
                    loading="lazy"
                    alt="hb"
                    src={natural}
                    className="self-stretch my-auto w-full aspect-[1.1] rounded-xl z-10"
                  />
                </div>
                <div className="flex flex-col w-full md:w-6/12 mt-5 md:mt-0">
                  <div className="shrink-0 relative mx-auto -left-[10rem] bg-primary h-48 w-full md:h-[350px] md:w-[100%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpandableParagraph;
