import React, { Component } from "react";

export default class counterHover extends Component {
  render() {
    return (
      <div
        style={{ width: "100%", backgroundColor: "yellow", height: "50px" }}
        onMouseMove={this.props.onIncrement}
      >
        This is counter :{this.props.counter}
      </div>
    );
  }
}
