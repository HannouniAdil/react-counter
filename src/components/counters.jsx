import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 1 }
    ]
  };

  handleDelete = id => {
    this.setState({ counters: this.state.counters.filter(el => el.id !== id) });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    counters.forEach(el => {
      if (el.id === counter.id) {
        el.value++;
      }
    });
    this.setState({ counters });
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map(el => {
        el.value = 0;
        return el;
      })
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
