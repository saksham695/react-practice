import React, { Component } from "react";
import ButtonComponent from "./button";
import "./App.css";
import InputComponent from "./input";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
    };
  }

  showTypedData = (value) => {
    this.setState({
      show: value,
    });
  };
  render() {
    const buttonTypes = [
      {
        type: "RESET",
        key: "kefbenf",
      },
      {
        type: "SUBMIT",
        key: "jhvdedek",
      },
    ];
    const inputField = [
      {
        label: "NAME",
        key: "dkjjddj",
      },
      {
        label: "PASSWORD",
        key: "dedelde",
      },
    ];

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
          <ButtonComponent title={itr.type} key={itr.key} />
        ))}
        {this.state.show}
      </div>
    );
  }
}
