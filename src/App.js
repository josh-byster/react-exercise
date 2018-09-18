import React, { Component } from 'react'
import { Instructions, Counter, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.changeCount = this.changeCount.bind(this)
    this.state = { count: 0 }
  }

  changeCount(newValue) {
    this.setState({ count: newValue })
  }
  render() {
    return (
      <div className="app">
        <h3>Welcome to Josh Byster's React.js Sandbox!</h3>
        <Instructions
          shouldDisplayImage={true}
          items={['First', 'Second', 'Third', 'Fourth', 'Fifth']}
        />
        <InitialCountForm
          count={this.state.count}
          changeCount={this.changeCount}
        />
        <Counter count={this.state.count} changeCount={this.changeCount} />
      </div>
    )
  }
}

export default App
