import React from "react";
import Card from "./Card";


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
        <Card {...item}/>
    </li>
  ));



export default List;
