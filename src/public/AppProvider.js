import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './configureStore'
import routes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

export default class AppProvider extends React.Component {
  scrollToHash () {
    const hash = window.location.hash.split('#')[2]
    if (hash) {
      const element = document.getElementById(hash)
      if (element) element.scrollIntoView()
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Router routes={routes} history={history} onUpdate={this.scrollToHash} />
      </Provider>
    )
  }
}
