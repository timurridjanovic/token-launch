const initialState = true

const reducer = (state = initialState, action) => {
  const { type } = action
  if (type.endsWith('_REQUEST')) {
    return true
  }

  if (type.endsWith('_SUCCESS')) {
    return false
  }

  return state
}

export default reducer
