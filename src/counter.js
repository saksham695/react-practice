import React, { Component } from "react";

export default class counter extends Component {
  state = {
    counter1: 0,
    counter2: 0,
  };
  incrementCounter1 = () => {
    this.setState({
      counter1: this.state.counter1 + 1,
    });
  };
  incrementCounter2 = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  };
  render() {
    console.log("Childrens", this.props);
    return (
      <div>
        {this.props.children[0](this.state.counter1, this.incrementCounter1)}
        {this.props.children[1](this.state.counter2, this.incrementCounter2)}
      </div>
    );
  }
}
