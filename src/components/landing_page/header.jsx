import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 intro-text-left">
                <h1>Sustainable Oceanic</h1>
                <h2>Solutions Begin Here</h2>
                <p>Global Ocean Solution Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video background */}
      <video autoPlay loop muted className="video-background">
        <source src="/videos/kv.mp4" type="video/mp4" />
      </video>
    </header>
  );
};
