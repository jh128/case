import React, { Component } from 'react'

import '../style.scss'

import { Carousel } from 'antd-mobile';

class Wiki extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }

  render() {
    return (
      <div>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {
          this.props.categories.map((value, index) => {
            return (
              <div key={value.id}>{value.title}</div>
            )
          })
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getCategories()
  }
}

export default Wiki