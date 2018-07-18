// creator可以返回两种数据：
// 一种是扁平的action
// 一种是一个函数
// 要得益于redux-thunk 中间件

export const wikiActionCreator = (data) => {
  return {
    type: 'GETCATEGORIES',
    data
  }
}

export const getCategories = () => {
  // 这里为什么可以使用dispatch？
  // 原因返回的方法被redux-thunk中间件调用了
  return (dispatch) => {
    fetch('/api/index')
    .then(res => res.json())
    .then(result => {
      dispatch(wikiActionCreator(result.data.categories))
    })
  }
}