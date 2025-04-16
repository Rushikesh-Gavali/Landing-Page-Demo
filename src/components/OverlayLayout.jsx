import React from "react";
import "./OverlayLayout.css";

const OverlayLayout = () => {
  return (
    <div className="background-container">
      <div className="logo-box">
        <img src="/color-logo.svg" alt="Logo" className="logo-img" />
      </div>
      <div className="info-box">
        <div className="info-content">
          <h1 className="info-heading">Online Yoga Classes</h1>
          <p className="info-subheading">Balance your Mind, Body & Soul</p>
          <button className="info-button">
            Book Your Demo for <span className="strikethrough">₹299</span> Free
            Now
          </button>
          <p className="info-disclaimer">(Limited Time Offer)</p>
        </div>
      </div>
      <div className="bottom-box">
        <div className="stats">
          <div>1000+ Happy Clients</div>
          <div className="separator">|</div>
          <div>26+ Countries</div>
          <div className="separator">|</div>
          <div>4.9/5 Google Rating</div>
        </div>
        <div className="additional-text">
          Live, 1-on-1 & Group Sessions from our certified yoga, meditation &
          nutrition experts
        </div>
      </div>
    </div>
  );
};

export default OverlayLayout;
