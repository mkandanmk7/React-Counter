import React from "react";
import "./App.css";
class AppFunc extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <h2 className="count">Counter</h2>
          <input
            type="text"
            id="counterValue"
            disabled
            value={this.state.counter}
          ></input>
          <div className="buttons">
            <div>
              <button onclick={this.increment}>+ </button>
            </div>
            <div>
              <button onClick={this.decrement}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppFunc;
