import React, { Component } from "react";

export default class counterClick extends Component {
  render() {
    return (
      <div
        style={{ width: "100%", backgroundColor: "red", height: "100px" }}
        onClick={this.props.onIncrement}
      >
        This is counter :{this.props.counter}
      </div>
    );
  }
}
