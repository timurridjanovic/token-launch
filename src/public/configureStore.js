import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import { default as rootSaga } from './sagas'
import rootReducer from './reducers'

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()

  const router = routerMiddleware(hashHistory)

  const composeFunc = process.env.NODE_ENV
    ? require('redux-devtools-extension').composeWithDevTools
    : compose

  let store = composeFunc(
    applyMiddleware(sagaMiddleware, router)
  )(createStore)(rootReducer)

  sagaMiddleware.run(rootSaga)

  return store
}
