import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  state = {
    initialCount: 0
  }
  componentDidUpdate() {
    console.log(this.state.initialCount)
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'bl']}
        />
        <input ref="countInput" type="number" />
        <button
          onClick={() => {
            this.setState({
              initialCount: ReactDOM.findDOMNode(this.refs.countInput).value
            })
          }}
        >
          hello
        </button>
        <Counter count={this.state.initialCount} />
      </div>
    )
  }
}

export default App
