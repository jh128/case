import { IS_SHOW } from './actionTypes'

const setVisible = (data) => {
  return {
    type: IS_SHOW,
    data
  }
}

export default setVisible