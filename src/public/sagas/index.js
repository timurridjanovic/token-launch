import { fork, takeLatest, put, call } from 'redux-saga/effects'
import Api from '../api'
import * as actions from '../actions'

export function* asyncHandler (type, api, options = {}) {
  yield put(actions.request(type))
  const { response } = yield call(api, { ...options })
  if (response) {
    yield put(actions.success(type, response))
  }
  return { response }
}

function* getHomePageData (action) {
  yield* asyncHandler(actions.GET_USER_DATA_ASYNC, Api.getUserData)
  yield* asyncHandler(actions.GET_CONTRIBUTION_DATA_ASYNC, Api.getContributionData)
  yield* asyncHandler(actions.GET_COMMENTS_ASYNC, Api.getComments)
}

function* watchGetHomePageData () {
  yield takeLatest(actions.GET_HOME_PAGE_DATA, getHomePageData)
}

export default function * rootSaga () {
  yield [
    fork(watchGetHomePageData)
  ]
}
