import React, { Component } from "react";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Right from "./Right";
import PropTypes from 'prop-types';
import { notEqual } from 'assert';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup'
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'


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


