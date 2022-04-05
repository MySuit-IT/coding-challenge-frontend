import React from "react";
import "./App.css";

const Page = () => {
  return (
    <div className="container">
      <div id="navbar">
        <button id="theme-btn">Dark Mode</button>
        <div id="title-div">
          <h1 id="title">My.Suit</h1>
        </div>
        <ul id="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">Orders</li>
          <li className="nav-item">Fabrics</li>
          <li className="nav-item">Settings</li>
          <li className="nav-item">Logout</li>
        </ul>
      </div>
      <div id="main">
        <h2>
          Hi, welcome to the <span>coding challenge</span>!
        </h2>
        <h2>Today your goal will be to change this page from</h2>
        <h2>
          <span>light mode</span> to <span>dark mode</span> and back
        </h2>
        <h2>
          utalizing <span>React.js</span> features.
        </h2>
        <h2>Good luck!</h2>
      </div>
      <footer>
        <p1>Style dark mode however you see fit for the challenge</p1>
      </footer>
    </div>
  );
};

export default Page;
