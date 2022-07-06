import React from "react";

import HeroImage from "./HeroImage.js";

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <HeroImage heading="Contact Us" text="Get in touch with us" />

      <div className="contact-cont">
        <section class="wrapper">
          <nav class="menu"></nav>

          <div class="card" data-effect="zoom">
            <button class="card__save  js-save" type="button">
              <i class="fa  fa-bookmark"></i>
            </button>
            <figure class="card__image">
              <img
                src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg"
                alt="Short description"
              />
            </figure>
            <div class="card__header">
              {/* <figure class="card__profile">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
                  alt="Short description"
                />
              </figure> */}
            </div>
            <div class="card__body">
              <h3 class="card__name">Adam Orme</h3>
              <p class="card__job">CEO</p>
              {/* <p class="card__bio">
                
              </p> */}
              <a href="mailto:adam.orme@supernovaspacesystems.com" class="card__bio" target="_blank">Send email</a>
              
            </div>
           
          </div>
        </section>

        <section class="wrapper">
          <nav class="menu">
            {/* <ul class="menu__list">
              <li class="menu__item  js-modify  active">Jhon Doe</li>
              <li class="menu__item  js-modify">Person 2</li>
              <li class="menu__item  js-modify">Person 3</li>
            </ul> */}
          </nav>

          <div class="card" data-effect="zoom">
            <button class="card__save  js-save" type="button">
              <i class="fa  fa-bookmark"></i>
            </button>
            <figure class="card__image">
              <img
                src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg"
                alt="Short description"
              />
            </figure>
            <div class="card__header">
              {/* <figure class="card__profile">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
                  alt="Short description"
                />
              </figure> */}
            </div>
            <div class="card__body">
              <h3 class="card__name">Support</h3>
              {/* <p class="card__job">Software Engineer</p> */}
              <a href="mailto:support@supernovaspacesystems.com" class="card__bio" target="_blank">Send email</a>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
