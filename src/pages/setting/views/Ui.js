import { connect } from 'react-redux'
import Setting from './Setting'

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
        type: 'home/is_show',
        data
      })
    }
  }
}

export default connect(mapState, mapDispatch)(Setting)