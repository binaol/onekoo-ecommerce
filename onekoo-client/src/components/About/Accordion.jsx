import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <div
      className="flex justify-between items-center p-4 cursor-pointer bg-secondary hover:bg-primary"
      onClick={onClick}
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <svg
        className={`w-6 h-6 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="p-4">{content}</div>
    </motion.div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Ethical Sourcing",
      content:
        "We directly source our coffee beans from Ethiopian farmers, ensuring fair trade and sustainable practices.",
    },
    {
      title: "Premium Quality Products",
      content:
        "Our coffee is known for its unique aroma and rich flavors, a testament to Ethiopia's renowned Arabica beans.",
    },
    {
      title: "Community Focus",
      content:
        "Profits are reinvested into local communities, supporting education, healthcare, and infrastructure.p",
    },
  ];

  return (
    <div className="max-w-xl mx-auto h-fit my-8 bg-white shadow-lg rounded-lg">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
