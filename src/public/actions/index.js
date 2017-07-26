const action = (type, payload = {}) => {
  return { type, ...payload }
}

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const GET_HOME_PAGE_DATA = 'GET_HOME_PAGE_DATA'
export const GET_USER_DATA_ASYNC = 'GET_USER_DATA_ASYNC'
export const GET_USER_DATA_ASYNC_SUCCESS = 'GET_USER_DATA_ASYNC_SUCCESS'
export const GET_CONTRIBUTION_DATA_ASYNC = 'GET_CONTRIBUTION_DATA_ASYNC'
export const GET_CONTRIBUTION_DATA_ASYNC_SUCCESS = 'GET_CONTRIBUTION_DATA_ASYNC_SUCCESS'
export const GET_COMMENTS_ASYNC = 'GET_COMMENTS_ASYNC'
export const GET_COMMENTS_ASYNC_SUCCESS = 'GET_COMMENTS_ASYNC_SUCCESS'
export const ON_CONTRIBUTION_SUBMIT = 'ON_CONTRIBUTION_SUBMIT'
export const ON_COMMENT_SUBMIT = 'ON_COMMENT_SUBMIT'

export const request = (type) => action(`${type}_${REQUEST}`)
export const success = (type, response) => action(`${type}_${SUCCESS}`, response)
export const actionCreators = {
  getHomePageData: () => action(GET_HOME_PAGE_DATA),
  onContributionSubmit: (contribution) => action(ON_CONTRIBUTION_SUBMIT, { contribution }),
  onCommentSubmit: (comment) => action(ON_COMMENT_SUBMIT, { comment })
}
