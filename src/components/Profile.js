import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';



export default class Profile extends Component {
    state = {

    };

    componentDidMount () {
        this.loaded_profile = true;
        ReactDOM.unmountComponentAtNode(document.getElementById('container'))
    };


    render() {
          return (
            <div className="profile">
                sfsddsd
            </div>
          );
    }
}
