import React from "react";
import Counter from "./counter";
import CounterClick from "./counterClick";
import CounterHover from "./counterHover";
export default function App() {
  return (
    <div>
      <Counter>
        {(counter, onIncrement) => (
          <CounterClick counter={counter} onIncrement={onIncrement} />
        )}
        {(counter, onIncrement) => (
          <CounterHover counter={counter} onIncrement={onIncrement} />
        )}
      </Counter>
    </div>
  );
}
