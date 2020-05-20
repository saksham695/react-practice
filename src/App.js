import React from "react";
import CounterClick from "./counterClick";
import CounterHover from "./counterHover";

export default function App() {
  return (
    <>
      <CounterClick name="counter-click" />
      <CounterHover name="counter-hover" />
    </>
  );
}
