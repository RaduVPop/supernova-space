import React from "react";

import "./Card.css";

const Card = ({ name, familyName, description, role }) => {
  return (
    <div>
      <figure class="snip0057 red hover">
        <figcaption>
          <h2>
            {name} <span>{familyName}</span>
          </h2>
          <p>{description}</p>
          <div class="icons">
            <a href="#">
              <i class="ion-ios-home"></i>
            </a>
            <a href="#">
              <i class="ion-ios-email"></i>
            </a>
            <a href="#">
              <i class="ion-ios-telephone"></i>
            </a>
          </div>
        </figcaption>
        <div class="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
            alt="sample4"
          />
        </div>
        <div class="position">{role}</div>
      </figure>
    </div>
  );
};

export default Card;
