import React from "react";

export const Image = ({ title, imagePath }) => {
  return (
    <div className="portfolio-item">
      <a href={imagePath} title={title} target="_blank" rel="noopener noreferrer">
        <div className="hover-bg">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={imagePath} className="img-responsive" alt={title} />
        </div>
      </a>
    </div>
  );
};
