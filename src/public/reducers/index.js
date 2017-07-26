import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import loading from './loading'
import user from './user'
import contributions from './contributions'
import comments from './comments'

const rootReducer = combineReducers({
  routing,
  loading,
  user,
  contributions,
  comments
})

export default rootReducer
