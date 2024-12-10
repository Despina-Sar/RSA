import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <h1>Welcome to the App</h1>
      <div className="buttons">
        <Link to="/component-a">
          <button className="btn">Go to Component A</button>
        </Link>
        <Link to="/component-b">
          <button className="btn">Go to Component B</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
