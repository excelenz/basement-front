import React, { Component } from "react";
import Thumb from "./Thumb";

const Card = ({ first_name, country, description, avatar }) => {
  // console.log('first_name:',first_name)
  //	console.log('props:',props)
  return (
    <div className="card">
      <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
          {first_name} from {country}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
