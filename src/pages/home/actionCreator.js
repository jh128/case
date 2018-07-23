import { IS_SHOW, SET_HOME_COMPONENT } from './actionTypes'

export const setVisible = (data) => {
  return {
    type: IS_SHOW,
    data
  }
}

export const setHomeComponent = (data) => {
  return {
    type: SET_HOME_COMPONENT,
    data
  }
}