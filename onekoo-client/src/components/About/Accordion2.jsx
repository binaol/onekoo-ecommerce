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

const Accordion2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Unique Coffee Shop Experience",
      content:
        "Our coffee shops provide a cozy and inviting atmosphere, perfect for social gatherings, business meetings, or a quiet place to work.",
    },
    {
      title: "Online and Offline Sales Channels",
      content:
        "Our products are available both in our Onekoo coffee shops and our online store at onekoocoffee.com, allowing coffee enthusiasts everywhere to experience the excellence of Onekoo Coffee.",
    },
    {
      title: "Social Responsibility Initiatives",
      content:
        "We are dedicated to minimizing our environmental impact, investing in local communities through education programs, healthcare initiatives, and infrastructure development, and ensuring ethical sourcing practices.",
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

export default Accordion2;
