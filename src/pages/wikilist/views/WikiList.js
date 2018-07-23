import React, { Component } from 'react'

import '../style.scss'

import List from '../../../components/DataList'

class WikiList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wikilist: []
    }
  }
  render() {
    return (
      <List
        history={this.props.history}
        datalist={this.state.wikilist}
        from="wikilist"
      />
    )
  }

  componentDidMount() {
    // console.log(this.props.id)
    fetch('/api/wikilist')
      .then(response => response.json())
      .then(result => {
        this.setState((prevState) => {
          return {
            wikilist: [...prevState.wikilist, ...result.data.list]
          }
        })
      })
  }
}

export default WikiList