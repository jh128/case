import { GET_CATEGORIES } from './actionTypes'

const defaultValue = {
  categories: []
}

// reducer是个纯函数
const getCategories = (state = defaultValue, action) => {
  if (action.type === GET_CATEGORIES) {
    return {
      categories: [...action.data]
    }
  }
  return state
}

export default getCategories