import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './../styles/initialCountForm.css'

class InitialCountForm extends Component {
  render() {
    return (
      <div className="initialCountForm">
        <h1>Counter</h1>
        <input ref="countInput" type="number" defaultValue={this.props.count} />
        <button
          onClick={() => {
            this.props.changeCount(
              ReactDOM.findDOMNode(this.refs.countInput).value
            )
          }}
        >
          Change
        </button>
      </div>
    )
  }
}

export default InitialCountForm
