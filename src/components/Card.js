import React from "react";

import "./Card.css";

const Card = ({ name, familyName, description, role, img }) => {
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
            src={img}
            alt="sample4"
          />
        </div>
        <div class="position">{role}</div>
      </figure>
    </div>
  );
};

export default Card;
