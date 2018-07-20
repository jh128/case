import { connect } from 'react-redux'
import setVisible from '../actionCreator'

import Home from './Home'

const mapState = (state) => {
  return {
    isShow: state.home.isShow
  }
}

const mapDispatch = (dispatch) => {
  return {
    setVisible() {
      dispatch(setVisible())
    }
  }
}

export default connect(mapState, mapDispatch)(Home)