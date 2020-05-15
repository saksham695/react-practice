import React, { Component } from "react";
import ButtonComponent from "./button";
import "./App.css";
import InputComponent from "./input";
import { data } from "./data";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      buttonPressed: false,
    };
  }
  buttonClicked = (button) => {
    console.log(`${button} pressed`);
    this.setState({
      buttonPressed: !this.state.buttonPressed,
    });
  };

  showTypedData = (inputValue) => {
    this.setState({
      show: inputValue,
    });
  };
  render() {
    const inputField = data.inputField;
    const buttonTypes = data.buttonTypes;
    return (
      <div className="box-wrapper">
        <h4>Login</h4>

        {inputField.map((itr) => (
          <InputComponent
            label={itr.label}
            key={itr.key}
            handle={this.showTypedData}
          />
        ))}
        {buttonTypes.map((itr) => (
          <ButtonComponent
            title={itr.type}
            key={itr.key}
            buttonClicked={this.buttonClicked}
          />
        ))}

        <h4>{this.state.buttonPressed ? this.state.show : null}</h4>
      </div>
    );
  }
}
