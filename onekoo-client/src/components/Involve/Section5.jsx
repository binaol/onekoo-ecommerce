import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import natural from "../../assets/images/About/establish.png";

const Section5 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Ref and animation control for the text section
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  // Ref and animation control for the images
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/achievement/get-achievements")
      .then((response) => {
        console.log(response.data[0].Description);
        setContent(response.data[0].Description); // Adjust this based on your API response structure
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the content!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="max-w-auto ml-[1rem] py-10 justify-center mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[80%] justify-center max-md:ml-0 max-md:w-full">
            <motion.div
              className="flex flex-col px-5 text-primary max-md:mt-10"
              // initial={{ opacity: 0, x: -50 }}
              // animate={{
              //   opacity: imageInView ? 1 : 0,
              //   x: imageInView ? 0 : -50,
              // }}
              transition={{ duration: 1 }}
              ref={imageRef}
            >
              <div className="text-4xl font-semibold">
                Future Expansion And Distribution
              </div>
              <motion.p
                initial={{ height: "auto" }}
                animate={{ height: isExpanded ? "auto" : "6rem" }}
                className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? "h-auto" : "h-24"
                }`}
              >
                {content}
              </motion.p>
              <button
                onClick={toggleExpansion}
                className="my-4 text-white hover:text-primary bg-secondary hover:bg-white rounded-xl hover:border-2 hover:border-secondary p-2 focus:outline-none"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full"
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}
            // transition={{ duration: 1 }}
            ref={imageRef}
          >
            <div className="max-w-[440px]">
              <div className="flex max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={natural}
                    className="self-stretch my-auto w-full aspect-[1.1] max-w-[468px] rounded-xl z-10"
                    alt="image-used"
                  />
                </div>
                <div className="flex flex-col ml-[-7rem] w-[110%] max-md:ml-0 max-md:w-full z-0">
                  <div className="shrink-0 mx-auto max-w-full bg-primary h-[350px] w-[100%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section5;
