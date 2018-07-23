import React, { Component, Fragment } from 'react'

import '../style.scss'

import { NavBar, Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <NavBar
          mode="dark"
          leftContent="返回"
          onLeftClick={() => {
            this.props.history.push('/home/' + this.props.match.params.from)
          }}
        > 详情页
        </NavBar>

        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={this.props.match.params.id}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>this is extra</span>}
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </Fragment>
    )
  }

  componentDidMount() {
    // console.log(this.props.match.params.id)
  }
}

export default Detail