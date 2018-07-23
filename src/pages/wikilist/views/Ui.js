import { connect } from 'react-redux'
import WikiList from './WikiList'

export default connect(
  state => {
    return {
      id: state.home.homeComponent.id
    }
  },
  dispatch => {
    return {}
  }
)(WikiList)