import React, { Component } from "react";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({ text: event.target.value }, () =>
      this.props.handle(this.state.text)
    );
  };
  render() {
    return (
      <>
        <label>
          {this.props.label}
          <input
            type="text"
            placeholder={this.props.label}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}
