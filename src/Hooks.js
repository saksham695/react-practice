import React, { useState, useEffect } from "react";
export default (props) => {
  console.log("componentWillMount");
  console.log("componentWillReceiveProps", props);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [cross, setCross] = useState(0);
  const mouseMoveHandler = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    console.log("componentDidMount");
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("componentWillUnmount");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []); // empty-array means don't watch for any updates

  useEffect(() => {
    // if (componentDidUpdate & (x or y changed))
    setMoveCount(moveCount + 1);
  }, [x, y]);

  useEffect(() => {
    // if componentDidUpdate or componentDidMount
    if (x === y) {
      setCross(x);
    }
  });
  return (
    <div
      style={{
        backgroundColor: `rgb(${x + y}, ${x}, ${y})`,
        height: "100vw",
        nargin: 0,
        padding: 0,
      }}
    >
      <p style={{ color: `rgb(${x}, ${y}, ${x + y})` }}>
        Your mouse is at {x}, {y} position.
      </p>
      <p>Your mouse has moved {moveCount} times</p>
      <p>
        X and Y positions were last equal at {cross}, {cross}
      </p>
    </div>
  );
};
