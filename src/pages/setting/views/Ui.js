import { connect } from 'react-redux'
import Setting from './Setting'
import { homeActionTypes } from '../../home/'

const mapState = (state) => {
  return {
    isShow: state.home.isShow
  }
}
// reducer一旦被合并到进去，所有组件可以直接调用
const mapDispatch = (dispatch) => {
  return {
    setVisible(data) {
      dispatch({
        type: homeActionTypes.IS_SHOW,
        data
      })
    }
  }
}

export default connect(mapState, mapDispatch)(Setting)