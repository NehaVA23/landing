import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS is imported for scroll animations

export const Features = (props) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div id="features" className="features-section">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2></h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-md-6 feature-item"
                  data-aos="zoom-in"
                  data-aos-duration="1500" // Animation speed
                  data-aos-delay="300" // Delay for smoother effect
                >
                  <div className="feature-video-container">
                    {d.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        className="feature-video"
                      >
                        <source src="/videos/head.mp4"type="video/mp4" />
                      </video>
                    ) : (
                      <p>Video not available</p>
                    )}
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
