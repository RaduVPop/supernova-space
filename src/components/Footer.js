import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
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
          Our mission is to become the cheapest and most flexible end-to-end space company.
        </p>
        <p>
          We will achieve this by creating reusable, air-launched rockets and modular spacecraft.
        </p>
          <div className="social">
            {/* <Link to="/">
              <FaFacebook size={30} style={{ marginRight: "1rem" }} />
            </Link> */}
            <a href="https://instagram.com/supernovaspacesystems?igshid=YmMyMTA2M2Y%3D" target="_blank">
              <FaInstagram size={30} style={{ marginRight: "1rem" }}/>
            </a>
            <a href="" target="_blank">
              <FaLinkedin size={30} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Building 37, University of Southampton</p>
              <h4>Southampton, United Kingdom</h4>
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

          {/* <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              test@test.test
            </h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
