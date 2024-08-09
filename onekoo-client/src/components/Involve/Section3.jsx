import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";

const Section3 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Ref and animation control for the text section
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/involvement/all-involvement")
      .then((response) => {
        console.log(response.data[0].Description);
        setContent(response.data[0].Description); // Adjust based on your API response structure
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
      <motion.div
        className="max-w-[80%] mx-auto my-10 p-4 border-primary rounded-lg text-primary shadow-md"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: textInView ? 1 : 0 }}
        // transition={{ duration: 1 }}
        ref={textRef}
      >
        <h4 className="mb-3 py-4 text-4xl font-semibold tracking-tight text-primary text-center">
          CSR Initiatives
        </h4>
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
          className="mt-4 text-white hover:text-primary bg-secondary hover:bg-white rounded-xl p-2 hover:border-2 hover:border-secondary focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </motion.div>
    </React.Fragment>
  );
};

export default Section3;
