import { useNavigate } from "react-router-dom";  // Import useNavigate

export const Navigation = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Handle login click to redirect to SignIn page
  const handleLoginClick = () => {
    navigate("/signin");  // Use navigate to go to the SignIn page
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            TarakPath
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            {/* Login Icon */}
            <li className="login-icon-container">
              <button className="login-icon-btn" onClick={handleLoginClick}>
                <img
                  src="/icons/avatar.png" // Correct icon path for public folder
                  alt="User Login"
                  className="login-icon"
                />
              </button>
            </li>
            <li className="theme-toggle-container">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                <img
                  src={`/icons/${theme === "light" ? "night-mode.png" : "themes.png"}`}
                  alt="Theme toggle icon"
                  width="30"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
