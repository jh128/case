import { connect } from 'react-redux'
import { setVisible, setHomeComponent } from '../actionCreator'

import Home from './Home'

const mapState = (state) => {
  return {
    isShow: state.home.isShow,
    homeComponent: state.home.homeComponent
  }
}

const mapDispatch = (dispatch) => {
  return {
    setVisible() {
      dispatch(setVisible())
    },
    setHomeComponent(data) {
      dispatch(setHomeComponent(data))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)