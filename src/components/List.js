import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,HashRouter,Link } from "react-router-dom";

const List = ({ list_data }) => {
  return (
    <div className="cards-list">
      <ul> {create_list_ui(list_data)} </ul>
    </div>
  );
};


const create_list_ui = items =>
  items.map(item => (
    <li key={item.id} className="card-item">
           <Router>

           <Link to={`profile/${item.id}`}>
                <Card {...item}/>
            </Link>
           <Route path="/profile/:itemsId" component={Profile} />
        </Router>

    </li>
  ));



export default List;
