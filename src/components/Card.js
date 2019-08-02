import React, { Component } from "react";
import Thumb from "./Thumb";

const Card = ({ first_name,last_name, country, description, avatar,dateofbirth,birthplace}) => {
  // console.log('first_name:',first_name)
  // console.log('props:',props)
  // console.log(rus);

  return (
    <div className="card">
      <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
            {!first_name ? "" : "first name: "+first_name} {!last_name ? "" : "last name "+last_name}
            <br />
            country: {country}
            <br />
            {!birthplace ? "" : "birthplace: "+birthplace}
            {!dateofbirth ? "" : "birthdate: "+dateofbirth}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </div>
  );
};

export default Card;



