import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 portfolio-item"
                  >
                    <div className="portfolio-item-container">
                      <img src={d.imagePath} alt={d.title} />
                      <div className="text-overlay">
                        <h3>{d.title}</h3>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
