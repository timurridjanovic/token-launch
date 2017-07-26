import * as actions from '../actions'

const initialState = {
  username: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_DATA_ASYNC_SUCCESS:
      return { username: action.user }
    default:
      return state
  }
  return state
}

export default reducer
