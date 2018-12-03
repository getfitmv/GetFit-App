import React from "react";
import Description from "./Description";
import NumStatics from "./NumStatics";
import AboutCard from "./AboutCard";

const Highlights = () => {
  return (
    <div className="bck_navey">
      <div className="about_wrapper gene-wrapper">
        <Description />

        <AboutCard />
        <NumStatics />
      </div>
    </div>
  );
};

export default Highlights;
