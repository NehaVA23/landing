import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";  // Import Routes and Navigate
import { Navigation } from "./components/landing_page/navigation"; 
import { Header } from "./components/landing_page/header";
import { Features } from "./components/landing_page/features";
import { About } from "./components/landing_page/about";
import { Services } from "./components/landing_page/services";
import { Gallery } from "./components/landing_page/gallery";
import { Team } from "./components/landing_page/team";
import { Contact } from "./components/landing_page/contact";
import SignUpForm from "./components/login_register/signin/src/SignUpForm";  // Import SignInForm component
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [theme, setTheme] = useState('light'); // Default to light theme

  // Initialize AOS for animations
  useEffect(() => {
    setLandingPageData(JsonData);
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Animation easing type
      once: true, // Only animate once when scrolling
    });

    // Check the current time and set the theme accordingly
    const hours = new Date().getHours();
    const defaultTheme = hours >= 7 && hours < 19 ? 'light' : 'dark'; // Daytime = light, Night = dark
    setTheme(defaultTheme);
    document.documentElement.setAttribute('data-theme', defaultTheme);

    // Load theme from localStorage if set
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in localStorage
  };

  return (
    <Router>  {/* Wrap the app in Router to enable routing */}
      <div>
        {/* Theme toggle button */}
        <Navigation theme={theme} toggleTheme={toggleTheme} />

        {/* Routes for Landing Page and Login */}
        <Routes>
          {/* Route for Landing Page */}
          <Route path="/" element={<><Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} /></>} />
          
        {/* Route for Sign In page */}
          <Route path="/signin" element={<SignUpForm />} />

          {/* Optional: Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to homepage if path is not found */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
