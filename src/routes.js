import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import App from "./components/App";
import Profile from "./components/Profile";


export default class routes extends Component {

    render() {

            return (
                  <Router>
                    <div>
                      <Route path='/' component={App} />
                    </div>
                  </Router>
            )
    }
}
