import React from "react";
import "./App.css";
// import Func from "./Func";

class AppFunc extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    console.log("Inc");
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    console.log("Dec");
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  reset = () => {
    this.setState({ counter: (this.state.counter = 0) });
  };

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
              <button onClick={this.increment}>+ </button>
            </div>
            <div>
              <button onClick={this.decrement}>-</button>
            </div>
            <div>
              <button onClick={this.reset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppFunc;
