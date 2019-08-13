import React, { Component } from "react";
import robots_data from "../db-data.json";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Right from "./Right";

export default class App extends Component {
    state = {

    };


    render() {
            return (
                  <Router>
                    <div class="main">
                       <Route exact path='/' component={Right} />
                       <div class='left'>
                            <Route path='/profile/:itemsId' render= {()=>{return <Profile />;}}/>
                       </div>
                    </div>
                  </Router>
            );
    }
}


