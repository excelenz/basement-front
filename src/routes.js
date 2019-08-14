import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import App from "./components/App";
import Profile from "./components/Profile";


export default class routes extends Component {
    constructor() {
        super()
        this.state = { loaded_profile :  false }
        this.loadChange = this.loadChange.bind(this);
    }

    loadChange(){
        if (!this.state.loaded_profile) {
            this.setState({loaded_profile: true});
        }
        alert(this.state.loaded_profile)

    }


    render() {
            return (
                  <Router>
                    <div>
                       <Route path='/' render= {(props)=>( <App {...props} is_profile={this.state.loaded_profile}/>)}/>
                       <Route path='/profile/:itemsId' render= {()=>{this.loadChange(); return <Profile />;}}/>
                    </div>
                  </Router>
            );
    }
}
