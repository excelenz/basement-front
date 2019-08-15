import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";
import robots_data from "../db_data/db-data.json";

export default class App extends Component {
    state = {
        original_list: robots_data,
        filtered_list: robots_data,
        loaded_profile: this.props.is_profile
    };

    update_list_state = filtered_list => {
        this.setState({
          filtered_list: filtered_list
        });
    };


    render() {
                return (
                          <div className="app {this.loaded_profile}" id="container">
                                <div>
                                     <Filter
                                      list_data={this.state.original_list}
                                      on_filter={this.update_list_state}
                                    />
                                    <div className="content-box">
                                        <List list_data={this.state.filtered_list} url_location={this.props.location}/>
                                    </div>
                                </div>
                          </div>
                )

    }
}


