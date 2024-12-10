import React, { useEffect, useRef, useState } from "react";

export const About = (props) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const aboutRef = useRef(null); // Ref to the About section

  useEffect(() => {
    // Create an intersection observer to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the section as visible
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.5, // 50% of the section needs to be in view
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current); // Start observing the About section
    }

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={isVisible ? "animate" : ""} // Add class when in view
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
