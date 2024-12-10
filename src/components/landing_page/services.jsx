import React, { useEffect } from "react";

export const Services = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const icons = servicesSection.querySelectorAll(".service-icon");

      if (servicesSection) {
        const sectionTop = servicesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when section is in view
        if (sectionTop <= windowHeight - 100) {
          icons.forEach((icon) => {
            icon.classList.add("animate");
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {/* Replace with <img> for custom icons */}
                  <img
                    src={d.icon}
                    alt={d.name}
                    className="service-icon"
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
