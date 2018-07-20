import { GET_CATEGORIES } from './actionTypes'

// 此 actioncreator 返回对象字面量
const getPlainCategories = (data) => {
  return {
    type: GET_CATEGORIES,
    data
  }
}

// 此 actioncreator 返回是个函数
const getAsyncCategories = () => {
  return (dispatch) => {
    fetch('/api/index')
      .then(response => response.json())
      .then(data => {
        dispatch(getPlainCategories(data.data.categories))
      })
  }
}

export {
  getPlainCategories,
  getAsyncCategories
}