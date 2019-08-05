import React, { Component } from "react";
import Thumb from "./Thumb";

const Card = ({ id,first_name,last_name, country, description, avatar,dateofbirth,birthplace,CurentId}) => {
  // console.log('first_name:',first_name)
   //console.log('props:',CurentId)

  return (
    <div className="card" >
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
        <p className="card-msg">{description} CurentId: {CurentId}</p>
      </div>
    </div>
  );
};

export default Card;




