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
        <h1>SuperNova Space</h1>
        <p>
          Our mission is to prove that a weather balloon as an airborne launch
          platform is a reliable and reusable method of launching a spacecraft.
          We are currently creating a minimum viable product for a future
          small-satellite launch service business.
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
