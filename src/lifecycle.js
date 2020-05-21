import React from "react";
export default class LifeCycle extends React.PureComponent {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      value: 0,
    };
  }

  //   componentWillMount() {
  //     console.log("Component will mount!");
  //   }

  componentDidMount() {
    console.log("Component did mount!");
    this.getValue();
  }

  getValue = () => {
    console.log("making api call");
    // method to make api call
    this.setState({
      value: this.state.value + 1,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("should Update next State", nextState);
    return this.state.value !== nextState.value;
  }

  //   componentWillUpdate(nextProps, nextState) {
  //     console.log("Component will update! nextState", nextState);

  //     return true;
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot before update ", prevState, prevProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update!");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevState.value < 1) {
      this.getValue();
    }
  }

  render() {
    console.log("render");
    console.log(this.state);
    return (
      <div>
        <h3>Hello Mounting Lifecycle Methods!</h3>
      </div>
    );
  }
}
