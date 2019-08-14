import React, { Component } from "react";
import robots_data from "../db-data.json";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Right from "./Right";

export default class App extends Component {

    constructor() {
        super()
        this.state = { loaded_profile :  false }
    }


    render() {
            return (
                  <Router>
                    <div className="main">
                       <Route exact path='/'  render= {(props)=>( <Right {...props} is_profile={this.state.loaded_profile}/>)}/>
                       <div className="left">
                            <Route path='/profile/:itemsId' component={Profile}/>
                       </div>
                    </div>
                  </Router>
            );
    }
}


