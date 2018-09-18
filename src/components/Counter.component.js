import React, { Component } from 'react'
import './../styles/counter.css'

class Counter extends Component {
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ count:  })
  // }
  incrementClick = () => {
    this.props.changeCount(parseInt(this.props.count, 10) + 1)
  }
  decrementClick = () => {
    this.props.changeCount(parseInt(this.props.count, 10) - 1)
  }
  render() {
    return (
      <div className="counter">
        <p>
          The counter is set to <b>{this.props.count}</b>
        </p>
        <button onClick={this.incrementClick}>Increment</button>
        <button onClick={this.decrementClick}>Decrement</button>
      </div>
    )
  }
}

export default Counter
