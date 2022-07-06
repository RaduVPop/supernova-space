import React from "react";

import Card from "./Card.js";
import HeroImage from "./HeroImage.js";

import "./MeetTheTeam.css";

import img from "../assets/adampic.jpg"

const MeetTheTeam = () => {
  return (
    <div className="team">
      <HeroImage heading="Meet The Team" text="Get familiar with who we are" />

      <div className="team-cont">
        <Card
          name="Adam"
          familyName="Orme"
          description="Adam Orme is a Business Entrepreneurship undergraduate at the University of Southampton. He has been involved in a series of student start-ups and holds committee positions in several university societies. He has a proven track record of extra-curricular work in mechanical engineering, physics, energy storage, and entrepreneurship."
          role="CEO"
          img={img}
        />

        <Card
          name="Debjyoti"
          familyName="Sengupta"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="CTO"
          img={img}

        />

       
      </div>
    </div>
  );
};

export default MeetTheTeam;
