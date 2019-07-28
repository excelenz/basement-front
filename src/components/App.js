import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";
import robots_data from "../db-data.json";

export default class App extends Component {
  state = {
    original_list: robots_data,
    filtered_list: robots_data
  };

  update_list_state = filtered_list => {
    this.setState({
      filtered_list: filtered_list
    });
  };

  render() {
    return (
      <div className="app">
        <Filter
          list_data={this.state.original_list}
          on_filter={this.update_list_state}
        />
        <div className="content-box">
          {/* Profile Goes Here...*/}
          <List list_data={this.state.filtered_list} />
        </div>
      </div>
    );
  }
}
