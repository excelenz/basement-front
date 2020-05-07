import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import person_data from "../db_data/id1/id1.json";



export default class Profile extends Component {
      addQuestion = e => {
        e.preventDefault()
        alert("new one")
      }

    render() {
          var data = person_data[0];
          return (
                <div className="self-profile">
                    <Thumb image_url={data.avatar} />
                    <div className="texts-box">
                    <div className="card-title self-profile-paragraph">
                        {! data.first_name ? "" : "Имя: "+ data.first_name} {! data.last_name ? "" : "Фамилия "+ data.last_name}
                        <br />
                        страна: { data.country}
                        <br />
                        {! data.placeofbirth? "" : "место рождения: "+ data.placeofbirth}
                        <br />
                        {! data.dateofbirth ? "" : "дата рождения: "+  data.dateofbirth}
                    </div>
                    <p className="card-msg">{ data.description}</p>
                    </div>
                    <div className="self-profile-section" >
                        <div className="self-profile-block">
                              <div className="texts-box">
                              <div className="self-profile-block_title">Персональная информация</div>
                                <div className="card-title self-profile-paragraph">
                                    {! data.first_name ? "" : "Имя: "+ data.first_name} {! data.last_name ? "" : "Фамилия "+ data.last_name}
                                    <br />
                                    страна: { data.country}
                                    <br />
                                    {! data.placeofbirth? "" : "место рождения: "+ data.placeofbirth}
                                    <br />
                                    {! data.dateofbirth ? "" : "дата рождения: "+  data.dateofbirth}
                                </div>
                              </div>
                        </div>
                        <div className="self-profile-block">
                              <div className="texts-box">
                              <div className="self-profile-block_title">Образование</div>
                                <div className="card-title self-profile-paragraph">
                                    {! data.first_name ? "" : "Имя: "+ data.first_name} {! data.last_name ? "" : "Фамилия "+ data.last_name}
                                    <br />
                                    страна: { data.country}
                                    <br />
                                    {! data.placeofbirth? "" : "место рождения: "+ data.placeofbirth}
                                    <br />
                                    {! data.dateofbirth ? "" : "дата рождения: "+  data.dateofbirth}
                                </div>
                              </div>
                        </div>
                    </div>
                    <button onClick={this.addQuestion} ><img style={{width:"15px"}} src={'../'+process.env.PUBLIC_URL +'img/edit_button.png'} /> add new block</button>
                 </div>
          );
    }
}
