import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  state = {
    count: this.props.count
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ count: parseInt(nextProps.count, 10) })
  }
  incrementClick = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrementClick = () => this.setState(({ count }) => ({ count: count - 1 }))
  render() {
    return (
      <div className="counter">
        <p>The counter is set to {this.state.count}</p>
        <button onClick={this.incrementClick}>Increment</button>
        <button onClick={this.decrementClick}>Decrement</button>
      </div>
    )
  }
}

export default Counter
