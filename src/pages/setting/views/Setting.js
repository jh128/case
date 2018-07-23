import React, { Component } from 'react'

// import styles from '../style.scss'
import { List, Switch } from 'antd-mobile'
import { createForm } from 'rc-form'

class Setting extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List
          renderHeader={() => '设置'}
        >
        <List.Item
          extra={<Switch
            {
              ...getFieldProps('Switch1', {
                initialValue: true,
                valuePropName: 'checked',
              })
            }
            checked={this.props.isShow}
            onClick={(checked) => this.handleSwitch.call(this, checked) }
          />}
        >是否显示地图：</List.Item>
      </List>
      </div>
    )
  }

  handleSwitch(checked) {
    this.props.setVisible()
  }
}
export default createForm()(Setting);