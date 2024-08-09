import React from "react";
import Card1 from "../components/FarmToCup/Card1.jsx";
import Card2 from "../components/FarmToCup/Card2.jsx";
import Card3 from "../components/FarmToCup/Card3.jsx";
import Card4 from "../components/FarmToCup/Card4.jsx";
import Card5 from "../components/FarmToCup/Card5.jsx";
import Video from "../components/FarmToCup/Video.jsx";
import Banner from "../components/FarmToCup/Banner.jsx";

const FarmToCup = () => {
  return (
    <React.Fragment>
      <div className="h-auto w-auto bg-white">
        <Banner />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Video embedId="wOYO13NMoFE" />
      </div>
    </React.Fragment>
  );
};

export default FarmToCup;
