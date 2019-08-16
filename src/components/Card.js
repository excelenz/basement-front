import React, { Component } from "react";
import Thumb from "./Thumb";

const Card = ({ id,first_name,last_name, country, description, avatar,dateofbirth,birthplace}) => {

  return (
    <div className="card" >
        <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
            {!first_name ? "" : "Имя: "+first_name} {!last_name ? "" : "Фамилия "+last_name}
            <br />
            страна: {country}
            <br />
            {!birthplace ? "" : "место рождения: "+birthplace}
            {!dateofbirth ? "" : "дата рождения: "+dateofbirth}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </div>
  );
};

export default Card;




