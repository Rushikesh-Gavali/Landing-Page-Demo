import React, { useRef } from "react";
import Card from "./Card";
import "./Testimonials.css";
import testimonial1 from "../assets/web/testimonial1.png";
import testimonial2 from "../assets/web/testimonial2.png";

const Testimonials = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Ambika",
      age: "40",
      location: "UK, Working Professional",
      quote:
        "I had a severe back pain issue from past 5yrs which used to reoccur every now n Dan.",
      rating: 5,
      image: testimonial1,
    },
    {
      name: "Sonai",
      age: "38",
      location: "UK, Working Professional",
      quote:
        "I had a severe back pain issue from past 5yrs which used to reoccur every now n Dan.",
      rating: 5,
      image: testimonial2,
    },
    {
      name: "Ambika",
      age: "40",
      location: "UK, Working Professional",
      quote:
        "I had a severe back pain issue from past 5yrs which used to reoccur every now n Dan.",
      rating: 5,
      image: testimonial1,
    },
    {
      name: "Sonai",
      age: "38",
      location: "UK, Working Professional",
      quote:
        "I had a severe back pain issue from past 5yrs which used to reoccur every now n Dan.",
      rating: 5,
      image: testimonial2,
    },
  ];

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-heading">
        Real <span className="span">Stories</span> <br /> Real{" "}
        <span className="span">Transformations</span>
      </h1>
      <p className="testimonials-subtitle">Don't just take our word for it</p>

      <div className="testimonials-carousel-container">
        <button className="carousel-button left" onClick={() => scroll("left")}>
          &lt;
        </button>
        <div className="testimonials-carousel" ref={carouselRef}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </div>
        <button
          className="carousel-button right"
          onClick={() => scroll("right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
