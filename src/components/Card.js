import React, { Component } from "react";
import Thumb from "./Thumb";
import Profile from "./Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Card = ({ id,first_name,last_name, country, description, avatar,dateofbirth,birthplace}) => {
  // console.log('first_name:',first_name)
  // console.log('props:',props)
  // console.log(rus);

  return (
    <div className="card" >
        <Router key={id}>
          <Link to="profile/${id}" >
          <Thumb image_url={avatar} />
          </Link>
          <Route path="profile/:id" component={Profile}/>
         </Router>
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




