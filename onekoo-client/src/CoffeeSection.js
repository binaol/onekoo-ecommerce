import React, { useState } from "react";
import './CoffeeSection.css'; // Ensure to create and import this CSS file
import coffeeImage from './coffee/images/coffee.jpg'; // Ensure the correct path to the image

const styleLT = {
  clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
  display: "flex",
  flexDirection: "column",
  fontSize: "0.7rem", // Adjust font size for smaller text
  height: "200px", // Adjust height as needed
};

const styleRT = {
  clipPath: "polygon(0 0, 100% 0, 100% 0, 0 50%)",
  backgroundColor: "red",
  height: "200px", // Adjust height as needed
};
const styleRB = {
    clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem", // Adjust font size for smaller text
    height: "200px", // Adjust height as needed
  };

const styleLB = {
  clipPath: "polygon(0 100%, 100% 53%, 100% 100%, 0 100%)",
  backgroundColor: "red",
  height: "200px", // Ensure this height matches styleRB
};

function CoffeeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="coffee-section">
      <div className="header-image">
        <img src={coffeeImage} alt="Coffee" />
        <div className="header-text">The coffee</div>
      </div>
      <div className="description">
        <p>
          At OCFCU our coffee is Ethiopian coffee, particularly from the Oromia region, celebrated for its unique qualities, attributed to the diverse growing conditions and traditional processing methods used by the farmers and the cooperative to produce and export washed, green coffee beans up to roasted coffee beans and packaged grinded coffee.
        </p>
      </div>
      <div className="info-section flex justify-between">
        <div className="info-box" style={styleLT}>
          <h2>Flavor Profiles</h2>
          <p className={isExpanded ? 'expanded' : 'collapsed'}>
            1. Jimma: Known for full-bodied, winey, and sometimes earthy flavors. Coffee from Jimma often has a bright acidity with complex flavors of fruit and wine.
            {isExpanded && (
              <span>
                Each cup offers a unique experience with a harmonious blend of sweet, tangy, and earthy notes.
              </span>
            )}
          </p>
          <a href="#" className="text-red-500 underline" onClick={handleShowMore}>
            {isExpanded ? 'Show less' : 'Show more'}
          </a>
        </div>
        <div className="info-box" style={styleRT}>
          {/* Content for the right-top box */}
        </div>
      </div>
      <div className="info-section flex justify-between mt-10">
        <div className="info-box" style={styleLB}>
          {/* Content for the left-bottom box */}
        </div>
        <div className="info-box" style={styleRB}>
          <h2>Unique Characteristics</h2>
          <p className={isExpanded ? 'expanded' : 'collapsed'}>
            1. Diverse Terroir: The varied climate, altitude, and soil conditions across Oromia contribute to the distinct flavors found in the coffee. Each region within Oromia offers a unique profile that adds to the richness of Ethiopian coffee.
            {isExpanded && (
              <span>
                This diversity results in a range of flavor profiles from fruity and floral to spicy and earthy.
              </span>
            )}
          </p>
          <a href="#" className="text-red-500 underline" onClick={handleShowMore}>
            {isExpanded ? 'Show less' : 'Show more'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoffeeSection;
