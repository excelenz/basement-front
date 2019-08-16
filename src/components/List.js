import React from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

const List = ({list_data,url_location }) => {

  {if (url_location.pathname.includes("profile")) {var  path=""} else {var path="profile/"} }

  return (
        <div className="cards-list">
              <ul> {create_list_ui(path,list_data)} </ul>
        </div>
  );
};


const create_list_ui = (url,items)  =>
  items.map(item => (
    <li key={item.id} className="card-item">
           <Link to={{pathname:`${url}${item.id}`}}>
                <Card {...item}/>
            </Link>

    </li>
  ));



export default List;
