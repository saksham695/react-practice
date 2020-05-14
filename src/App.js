import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  resetPressed = () => {
    console.log("Reset Pressed");
  };
  submitPressed = () => {
    console.log("Submit Pressed");
  };
  render() {
    return (
      <div className="container">
        <h4>Login</h4>
        <form>
          <label>
            Name
            <input type="text" placeholder="Name" className="input1" />
          </label>
          <br></br>
          <label>
            Password
            <input type="text" placeholder="Password" className="input2" />
          </label>
        </form>
        <input
          className="button"
          type="button"
          value="Reset"
          onClick={this.resetPressed}
        />
        <input
          className="button"
          type="button"
          value="Submit"
          onClick={this.submitPressed}
        />
      </div>
    );
  }
}
