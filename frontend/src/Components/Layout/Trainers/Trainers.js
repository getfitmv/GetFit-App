import React from "react";
import Description from "./Description";
import TrainersCard from "./TrainersCard";
import CardsT from "./CardsT";
const Trainers = () => {
  return (
    <div className="bck_navey line-top">
      <div className="gene-wrapper trainers-wrapper">
        <Description />
        <TrainersCard />
      </div>
    </div>
  );
};

export default Trainers;
