import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>About Us</h4>
          <p>
            Our mission is to prove that a weather balloon as an airborne launch
            platform is a reliable and reusable method of launching a
            spacecraft. We are currently creating a minimum viable product for a
            future small-satellite launch service business.
          </p>
          <div className="social">
            <Link to="/">
              <FaFacebook size={30} style={{ marginRight: "1rem" }} />
            </Link>
            <Link to="/">
              <FaTwitter size={30} style={{ marginRight: "1rem" }} />
            </Link>
            <Link to="/">
              <FaLinkedin size={30} style={{ marginRight: "1rem" }} />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>123 St. 9999</p>
              <h4>Soton, UK</h4>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              (+44) 7393 412240
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              test@test.test
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
