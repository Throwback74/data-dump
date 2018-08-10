import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleOmegaDecrement = () => {
    this.setState({ count: this.state.count - 9000 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          
          <button style={{marginLeft: 4 + 'em'}} className="btn btn-dark" onClick={this.handleDecrement}>
            Decrement
          </button>

          <button style={{marginLeft: 4 + 'em'}} className="btn-large border border-dark btn-danger rounded" onClick={this.handleOmegaDecrement}>
            DANGER!!!
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
