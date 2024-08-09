import React from "react";
import Banner from "../components/About/Banner";
import Intro from "../components/About/Intro";
import Carousel from "../components/About/Carousel";
import Accordion from "../components/About/Accordion";
import Accordion2 from "../components/About/Accordion2";
import Tab from "../components/About/Tob"; // Corrected the import from 'Tob' to 'Tab'

const About = () => {
  return (
    <React.Fragment>
      <div className="self-center gap-10 bg-white">
        <Banner />
        <Intro />
        <p className="text-4xl text-primary p-4 text-center font-semibold">
          What We Do
        </p>
        <div className="flex flex-col md:flex-row md:gap-4 p-4">
          <Accordion />
          <Accordion2 />
        </div>
        <div className="w-[87%] mx-auto">
          <Tab />
          <Carousel />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
