import React from "react";
import parse from "html-react-parser";
import "./serviceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card-div">
      <h2>{parse(service.title)}</h2>
    </div>
  );
};

export default ServiceCard;
