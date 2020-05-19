import React, { Component } from "react";
import PropTypes from "prop-types";
import Identity from "lodash/identity";
export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    const { handle } = this.props;
    this.setState({ text: event.target.value }, () => handle(this.state.text));
  };
  render() {
    const { label } = this.props;
    const { text } = this.state;

    return (
      <>
        <label>
          {label}
          <input
            onChange={this.handleChange}
            placeholder={label}
            type="text"
            value={text}
          />
        </label>
      </>
    );
  }
}
InputComponent.defaultProps = {
  handle: Identity,
  label: "Name",
};

InputComponent.propTypes = {
  handle: PropTypes.func,
  label: PropTypes.string,
};
