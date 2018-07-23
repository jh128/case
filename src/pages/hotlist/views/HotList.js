import React, { Component } from 'react'

import '../style.scss'

import DataList from '../../../components/DataList'

class HotList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotList: []
    }
  }
  render() {
    return (
      <DataList
        history={this.props.history}
        datalist={this.state.hotList}
        from="hotlist"
      />
    )
  }

  componentDidMount() {
    // console.log(this.props.id)
    fetch('/api/hotlist')
      .then(response => response.json())
      .then(result => {
        this.setState((prevState) => {
          return {
            hotList: [...prevState.hotList, ...result.data.list]
          }
        })
      })
  }
}

export default HotList