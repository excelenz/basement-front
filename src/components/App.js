import React, { Component } from "react";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Right from "./Right";

export default class App extends Component {

    render() {
            return (
                  <Router>
                    <div className="main">
                       <Route exact path='/'/>
                       <div className="right">
                            <Route component={Right}/>
                       </div>
                       <div className="left">
                            <Route path='/profile/:itemsId' component={Profile}/>
                       </div>
                    </div>
                  </Router>
            );
    }
}


