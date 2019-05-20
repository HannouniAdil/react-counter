import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
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

  handleDecriment = counter => {
    const counters = [...this.state.counters];
    counters.forEach(el => {
      if (el.id === counter.id) {
        el.value--;
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
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecriment={this.handleDecriment}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
