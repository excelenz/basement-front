import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,HashRouter,Link } from "react-router-dom";

const List = ({ list_data }) => {
  return (
  <Router>
    <Route path="/profile/:itemsId" component={Profile}/>
    <div className="cards-list">
      <ul> {create_list_ui(list_data)} </ul>
    </div>
  </Router>
  );
};


const create_list_ui = items =>
  items.map(item => (
    <li key={item.id} className="card-item">
           <Link to={{pathname:`profile/${item.id}`,state: {country:'200'}}} target="_blank">
                <Card {...item}/>
            </Link>
    </li>
  ));



export default List;
