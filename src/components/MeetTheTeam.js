import React from "react";

import Card from "./Card.js";
import HeroImage from "./HeroImage.js";

import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <div className="team">
      <HeroImage heading="Meet The Team" text="Get familiar with who we are" />

      <div className="team-cont">
        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />

        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />

        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />

        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />

        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />

        <Card
          name="VICTORIA"
          familyName="PENA"
          description="A voice crackles in Calvin's radio: 'Enemy fighters at two
        ' 'Roger. What should I do until then?'"
          role="Software Engineer"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
