import { IS_SHOW } from './actionTypes'
const defaultValue = {
  isShow: false
}

const setVisible = (state = defaultValue, action) => {
  if (action.type === IS_SHOW) {
    return {
      isShow: !state.isShow
    }
  }
  return state
}

export default setVisible