import React, { Component } from "react";

export default class button extends Component {
  buttonClicked = (button) => {
    console.log(`${button} pressed`);
  };
  render() {
    const buttonStyle = {
      margin: " 0 20px",
      width: "80px",
      backgroundColor: "silver",
      padding: "2px",
    };
    return (
      <>
        <button
          style={buttonStyle}
          onClick={() => this.buttonClicked(this.props.title)}
        >
          {this.props.title}
        </button>
      </>
    );
  }
}
