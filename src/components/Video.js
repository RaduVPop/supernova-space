import React from "react";
import { Link } from "react-router-dom";

import "./Video.css";

import spaceVideo from "../assets/space-video.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Supernova Space Systems</h1>
        <p>
          Our mission is to become the cheapest and most flexible end-to-end space company.
        </p>
        <p>
          We will achieve this by creating reusable, air-launched rockets and modular spacecraft.
        </p>
        <div className="hero-btns">
          <Link to="/about" className="btn">
            Our project
          </Link>
          <Link to="/contact" className="btn">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
