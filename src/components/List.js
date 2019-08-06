import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

const List = ({ list_data }) => {
  return (
        <div className="cards-list">
            <Router>
              <Route path='/profile/:itemsId' component={Profile} />
              <ul> {create_list_ui(list_data)} </ul>
            </Router>
        </div>
  );
};


const create_list_ui = items =>
  items.map(item => (
    <li key={item.id} className="card-item">
           <Link to={{pathname:`profile/${item.id}`}}  params={{avatar: item.avatar }}>
                <Card {...item}/>
            </Link>

    </li>
  ));



export default List;
