import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Involve/Banner";
import Carousel1 from "../components/Involve/Carousel1";
import Section3 from "../components/Involve/Section3";
import Carousel2 from "../components/Involve/Carousel2";
import Section5 from "../components/Involve/Section5";
import Download from "../components/Involve/Download";
import Carousel3 from "../components/Involve/Carousel3";

const Involve = () => {
  const [carousel1Images, setCarousel1Images] = useState([]);
  const [carousel2Images, setCarousel2Images] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response1 = await axios.get(
          "https://back.onekoocoffee.com/api/involvement/all-involvement"
        );
        console.log(
          response1.data.map((value) => {
            return value.Image;
          })
        );
        const response2 = await axios.get(
          "https://back.onekoocoffee.com/api/achievement/get-achievements"
        );
        console.log(
          response2.data.map((value) => {
            return value.Image;
          })
        );

        setCarousel2Images(
          response2.data.map((value) => {
            return value.Image;
          })
        );

        setCarousel1Images(
          response1.data.map((value) => {
            return value.Image;
          })
        ); // Adjust this based on your API response structure
        // setCarousel2Images(response2.data.images); // Adjust this based on your API response structure
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the images!", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="w-auto h-auto bg-white">
        <Banner />
        <Carousel1 images={carousel1Images} />
        <Section3 />
        <Carousel2 images={carousel2Images} />
        <Section5 />
        <Download />
        {/* <Carousel3 /> */}
      </div>
    </React.Fragment>
  );
};

export default Involve;
