import * as actions from '../actions'
import { omit } from 'lodash'

const initialState = {
  totalContribution: 0,
  totalGoal: 0,
  backers: 0,
  timeLeft: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTRIBUTION_DATA_ASYNC_SUCCESS:
      return omit(action, 'type')
    case actions.ON_CONTRIBUTION_SUBMIT:
      return {
        ...state,
        totalContribution: state.totalContribution + action.contribution,
        backers: state.backers + 1
      }
    default:
      return state
  }
  return state
}

export default reducer
