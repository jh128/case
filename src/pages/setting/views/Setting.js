import React, { Component } from 'react'

// import styles from '../style.scss'
import { Button } from 'antd-mobile'

class Setting extends Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleBtnClick.bind(this)}>点击</Button>
      </div>
    )
  }

  handleBtnClick() {
    this.props.setVisible('abc')
    document.querySelector('div[data-type="map"]').style.display = 'none'
  }
}

export default Setting