import React from 'react'
import { hot } from 'react-hot-loader'

import './styles.css'
import './main.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
      </div>
    )
  }
}

export default hot(module)(App)
