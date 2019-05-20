import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onIncrement,
      onReset,
      onDecriment
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecriment={onDecriment}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
