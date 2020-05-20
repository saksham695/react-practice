import React, { Component } from "react";
import updatedComponent from "./counter";

class CounterHover extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div
        style={{ width: "100%", backgroundColor: "yellow", height: "50px" }}
        onMouseOut={this.props.handleChange}
      >
        This is counter :{this.props.counter}
      </div>
    );
  }
}

export default updatedComponent(CounterHover, 10);
