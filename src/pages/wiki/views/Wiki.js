import React, { Component, Fragment } from 'react'

import styles from '../style.scss'
import CSSModule from 'react-css-modules'

import { getCategories } from '../actionCreator'

import { connect } from 'react-redux'

// connect: 把store里的state,和对state的操作

const mapState = (state) => {  
  return {
    categories: state.wiki.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    getData: (action) => {
      dispatch(action)
    }
  }
}

class Wiki extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.categories.map((value, index) => {
            return <div key={value.id}>{value.title}</div>
          })
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getData(getCategories())
  }
}

export default connect(mapState, mapDispatch)(Wiki)