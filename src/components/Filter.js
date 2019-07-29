import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Filter extends Component {
  // num_elements = 0;

  constructor(props) {
    super(props);
    this.num_elements = props.list_data.length;

    // this.update_list = this.update_list.bind(this);
    // this.update_list = () => this.update_list();
  }
  update_list = event => {
    const txt = event.target.value;
    const { list_data, on_filter } = this.props;

    let filtered_list = list_data.filter(item =>
      item.first_name.toLowerCase().includes(txt.toLowerCase())
    );
    this.num_elements = filtered_list.length;
    on_filter(filtered_list);
  };
  render() {
    return (
      <div className="header">
        <h4 className="filter_title">{this.num_elements} items filtered</h4>
        <input className="filter" onChange={this.update_list} />
      </div>
    );
  }

  static propTypes = {
    on_filter: PropTypes.func.isRequired,
    list_data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
      })
    ).isRequired
  };
}
