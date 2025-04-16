import React from 'react';

const BenefitImageCard = ({ image, alt }) => {
  return (
    <div className="benefit-image-card">
      <img src={image} alt={alt} className="benefit-image" />
    </div>
  );
};

export default BenefitImageCard;
