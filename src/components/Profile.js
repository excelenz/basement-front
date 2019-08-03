import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'

const Profile = ({ first_name,last_name, country, description, avatar,dateofbirth,birthplace}) => {

  return (
    <div className="profile">
      <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
            {!first_name ? "" : "first name: "+first_name} {!last_name ? "" : "last name "+last_name}
            <br />sdsd
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

export default Profile;




