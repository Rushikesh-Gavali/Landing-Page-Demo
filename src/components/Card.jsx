import React from "react";
import "./Card.css";

const Card = ({ name, age, location, quote, rating, image }) => {
  return (
    <div className="testimonial-card">
      <img
        src={image}
        alt={`${name}'s testimonial`}
        className="testimonial-image"
      />
      <div className="testimonial-content">
        <p className="testimonial-quote">{quote}</p>
        <div className="testimonial-info">
          <span className="testimonial-name">
            {name}, {age}
          </span>
          <span className="testimonial-location">{location}</span>
          <div className="testimonial-rating">
            {"★".repeat(rating) + "☆".repeat(5 - rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
