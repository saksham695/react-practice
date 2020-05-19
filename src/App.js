import React, { Component } from "react";
import ButtonComponent from "./Button/Button";
import InputComponent from "./Input/Input";
import { data } from "./data";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: "",
      inputText: "",
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
    const buttonTypes = data.buttonTypes;
    const inputField = data.inputField;
    return (
      <div className="box-wrapper">
        <h4>Login</h4>

        {inputField.map((itr) => (
          <InputComponent
            handle={this.showTypedData}
            key={itr.key}
            label={itr.label}
          />
        ))}
        {buttonTypes.map((itr) => (
          <ButtonComponent
            buttonClicked={this.buttonClicked}
            key={itr.key}
            title={itr.type}
          />
        ))}

        <h4>{this.state.displayContent}</h4>
      </div>
    );
  }
}
