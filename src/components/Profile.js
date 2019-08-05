import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'



const Profile = ({ id,first_name,last_name, country, description, avatar,dateofbirth,birthplace}) => {
  return (
    <div className="profile">
      <Thumb image_url={avatar} />
    </div>
  );
};

export default Profile;




