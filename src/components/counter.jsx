import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onDelete, onIncrement, onDecriment } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => onDecriment(counter)}
            className="btn btn-secondary btn-sm"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
