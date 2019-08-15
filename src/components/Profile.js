import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import robots_data from "../db_data/id1/id1.json";



export default class Profile extends Component {

    state = {
        user: null
    }

    componentDidMount () {
        const { url } = this.props.match.params
    }

    render() {

          return (
            <div className="profile">
                sfsddsd {this.props.match.url}
            </div>
          );
    }
}
