// import React from 'react'
import { connect } from 'react-redux'

import Wiki from './Wiki'

// presentation UI组件，影子组件，傻瓜组件
import { getAsyncCategories } from '../actionCreator'

import { setHomeComponent } from '../../home/actionCreator'

const mapState = (state) => {
  return {
    categories: state.wiki.categories
  }
  // state = {
  //   home: value,
  //   wiki: {
  //     categories: []
  //   }
  // }
}

const mapDispatch = (dispatch) => {
  return {
    // 自定义方法，专门触发dispatch
    getCategories() {
      dispatch(getAsyncCategories())
    },

    setHomeComponent(data) {
      dispatch(setHomeComponent(data))
    }
  }
}

// connect方法协助我们将categories, 和getCategories 绑定在Wiki组件上，放到Wiki组件的props上

export default connect(mapState, mapDispatch)(Wiki)