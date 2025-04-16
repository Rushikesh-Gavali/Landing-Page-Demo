import React from "react";
import "./Benifits.css";
import time1 from "../assets/web/time1.png";
import time2 from "../assets/web/time2.png";
import cost1 from "../assets/web/cost1.png";
import cost2 from "../assets/web/cost2.png";
import BenefitImageCard from "./BenifitImageCard";

const benefitImages = [
  { src: time1, alt: "Time" },
  { src: cost1, alt: "Cost" },
  { src: time1, alt: "Time" },
];

const benefitImages2 = [
  { src: time2, alt: "Time" },
  { src: cost2, alt: "Cost" },
  { src: time2, alt: "Time" },
];

const Benefits = () => {
  return (
    <div className="yoga-benefits-section">
      <h1 className="benefits-heading">
        {" "}
        Ancient Wisdom, Modern Solutions
        <br /> <span className="span">Yoga That Fits Your Life</span>
      </h1>

      <div className="benefits-cards">
        {benefitImages.map((item, index) => (
          <BenefitImageCard key={index} image={item.src} alt={item.alt} />
        ))}
      </div>

      <p className="benefits-info">
        Let's take the 1st Step towards peaceful life.
      </p>
      <button className="demo-button">
        Book Your Demo for <span className="strikethrough">₹299</span> Free Now
      </button>

      <div className="benefits-cards">
        {benefitImages2.map((item, index) => (
          <BenefitImageCard key={index} image={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
