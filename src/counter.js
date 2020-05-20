import React from "react";

const updatedComponent = (OldComponent) => {
  class NewComponent extends React.Component {
    state = {
      counter: 0,
    };
    incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    render() {
      return (
        <OldComponent
          counter={this.state.counter}
          handleChange={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default updatedComponent;
