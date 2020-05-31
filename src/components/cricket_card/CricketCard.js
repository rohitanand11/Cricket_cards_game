import React from "react";
import Classes from "./CricketCard.module.css";

const CricketCard = (props) => {
  return (
    <div className={Classes.container}>
      <div className={Classes.imageContainer}>
        <img src={props.imgpath} alt={props.name} />
      </div>
      <p className={Classes.name}>
        <strong>{props.name}</strong>
      </p>
      <p className={Classes.name}>
        <strong>exp - {props.exp}</strong>
      </p>
    </div>
  );
};

export default CricketCard;
