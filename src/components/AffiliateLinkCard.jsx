// AffiliateLinkCard.jsx
import React from 'react';
import './AffiliateLinkCard.css';

const AffiliateLinkCard = ({ title, description, url, image }) => {
  return (
    <div className="affiliate-card">
      <img src={image} alt={title} className="affiliate-card-image" />
      <div className="affiliate-card-content">
        <h3 className="affiliate-card-title">{title}</h3>
        <p className="affiliate-card-description">{description}</p>
        <a href={url} className="affiliate-card-button" target="_blank" rel="noopener noreferrer">
          Saiba Mais
        </a>
      </div>
    </div>
  );
};

export default AffiliateLinkCard;
