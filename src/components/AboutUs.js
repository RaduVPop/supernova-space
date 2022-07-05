import React from "react";
import HeroImage from "../components/HeroImage";

import "./AboutUs.css";

import img from "../assets/team.avif";

const AboutUs = () => {
  return (
    <div className="about-us">
      <HeroImage heading="About Us" text="Explore more about our project" />

      <div className="about-us-cont">
        <div className="about-us-header">
          <h2>Our Mission</h2>
          <p>
            Our mission is to prove that a weather balloon as an airborne launch
            platform is a reliable and reusable method of launching a
            spacecraft. We are currently creating a minimum viable product for a
            future small-satellite launch service business.
          </p>
        </div>

        <div class="container">
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Phase 1</h3>
              <span>50N engine design, manufacture and test</span>
              <p>
                Manufacture and Test of Avionics using Hardware-in-the-loop
                testing
              </p>
            </div>
          </div>

          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Phase 2</h3>
              <span>1000N engine design, manufacture and test</span>
              <p>Building of full-scale rocket</p>
            </div>
          </div>

          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Phase 3</h3>
              <span>Flight testing program</span>
              <p>Part 1: Balloon launch with simulated payload</p>
              <p>Part 2: Full launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
