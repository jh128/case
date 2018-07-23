import { IS_SHOW, SET_HOME_COMPONENT } from './actionTypes'
const defaultValue = {
  isShow: true,
  homeComponent: {
    component: 'wiki',
    id: '0'
  }
}

export default (state = defaultValue, action) => {
  if (action.type === IS_SHOW) {
    // 使用对象展开的方法去合并原有的状态
    // 千万不要修改原有状态，一定要返回一个新的状态
    return {
      ...state,
      isShow: !state.isShow
    }
  }

  if (action.type === SET_HOME_COMPONENT) {
    return {
      ...state,
      homeComponent: {
        ...state.homeComponent,
        ...action.data
      }
    }
  }

  return state
}