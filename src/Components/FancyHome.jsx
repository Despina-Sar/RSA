import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // CSS for fancy home page


const FancyHome = () => {
    return (
      <div className="fancy-home">
        {/* Logo Section */}
        <div className="logo-container">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="logo"
          />
        </div>
  
        {/* Buttons Section */}
        <div className="buttons-container">
          <button className="fancy-button">
            <Link to="/test1" className="button-link">
              Go to Test1
            </Link>
          </button>
          <button className="fancy-button">
            <a
              href="https://example.com"
              className="button-link"
              target="_blank"
              rel="noreferrer"
            >
              External Link
            </a>
          </button>
        </div>
      </div>
    );
  };
  
  export default FancyHome;
