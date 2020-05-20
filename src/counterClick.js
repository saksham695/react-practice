import React, { Component } from "react";
import updatedComponent from "./counter";

class counterClick extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{ width: "100%", backgroundColor: "red", height: "50px" }}
        onClick={this.props.handleChange}
      >
        This is counter :{this.props.counter}
      </div>
    );
  }
}

export default updatedComponent(counterClick, 12);
