import { connect } from 'react-redux'
import HotList from './HotList'

export default connect(
  state => {
    return {
      id: state.home.homeComponent.id
    }
  },
  dispatch => {
    return {}
  }
)(HotList)