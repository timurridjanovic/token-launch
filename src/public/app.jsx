import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'babel-polyfill'

import AppProvider from './AppProvider'

ReactDOM.render(
  <AppProvider />
  , document.getElementById('root')
)
