import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundry from './DefaultErrorBoundry'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.querySelector('#root')
)
