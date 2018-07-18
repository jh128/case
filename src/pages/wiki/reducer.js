const defaultValue = {
  categories: []
}

// reducer是个同步方法，不能做异步操作
// getData, 负责将action携带的数据取到， 去生成一个新的categroies
const getData = (state = defaultValue, action) => {  
  if (action.type === 'GETCATEGORIES') {
    return {
      categories: [...state.categories, ...action.data]
    }
  }
  return state
}

export default getData