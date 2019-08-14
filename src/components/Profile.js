import React, { Component } from "react";
import Thumb from "./Thumb";
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';



export default class Profile extends Component {

    state = {
        user: null
    }

    componentDidMount () {
        const { url } = this.props.match.params
        console.log(this.props.match.params.itemsId)
        console.log(this.props.match.url)
    }

    render() {
           console.log(this.props)
          return (
            <div className="profile">
                sfsddsd {this.props.match.url}
            </div>
          );
    }
}
