import React, { Component } from "react";
import ButtonComponent from "./button";
import "./App.css";
import InputComponent from "./input";
import { data } from "./data";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      displayContent: "",
    };
  }
  buttonClicked = (button) => {
    console.log(`${button} pressed`);
    this.setState({
      displayContent: this.state.inputText,
      inputText: "",
    });
  };

  showTypedData = (inputValue) => {
    this.setState({
      inputText: inputValue,
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

        <h4>{this.state.displayContent}</h4>
      </div>
    );
  }
}
