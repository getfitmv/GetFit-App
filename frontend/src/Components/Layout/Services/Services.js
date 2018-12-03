import React from "react";
import Fade from "react-reveal/Fade";
import DescriptionService from "./DescriptionService";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="service-wrapper gene-wrapper">
      <DescriptionService />
      <ServiceCard />
    </div>
  );
};

export default Services;
