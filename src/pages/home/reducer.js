const defaultValue = true

const show = (state = defaultValue, action) => {
  if (action.type === 'SHOW') {
    return !state
  }
  return state
}

export default show