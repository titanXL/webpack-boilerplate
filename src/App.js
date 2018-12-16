import React from 'react'
import { hot } from 'react-hot-loader'

import './styles.css'
import image from './image.jpg'

const Warning = React.lazy(() => import('./Warning'))

const a = 'a'

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <img src={image} alt="logo" />
        <h1 className={count > 10 ? 'warning' : ''}>Hello World! {count}</h1>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          Decrement
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
