import React, { Component } from 'react'
import './../styles/instructions.css'
import ReactDOM from 'react-dom'

class InitialCountForm extends Component {
  render() {
    return (
      <div className="numericInput">
        <input ref="countInput" type="number" defaultValue={this.props.count} />
        <button
          onClick={() => {
            this.props.changeCount(
              ReactDOM.findDOMNode(this.refs.countInput).value
            )
          }}
        >
          hello
        </button>
      </div>
    )
  }
}

export default InitialCountForm
