import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";
import robots_data from "../db-data.json";
import Profile from "./Profile";

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

    componentDidMount () {
        console.log("MOUNT");
    };

    componentWillUnmount () {
        console.log("unMOUNT");
    };

    render() {
                return (
                      <div className="app" id="container">
                        {
                            this.state.loaded_profile ? "":
                            <div>
                                 <Filter
                                  list_data={this.state.original_list}
                                  on_filter={this.update_list_state}
                                />
                                <div className="content-box">
                                 <List list_data={this.state.filtered_list} />
                                </div>
                            </div>
                        }
                      </div>
                )

    }
}


