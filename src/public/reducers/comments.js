import * as actions from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COMMENTS_ASYNC_SUCCESS:
      return action.comments
    case actions.ON_COMMENT_SUBMIT:
      return [ action.comment, ...state ]
    default:
      return state
  }
}

export default reducer
