import React, { Component } from 'react'

import '../style.scss'

import { Carousel, Grid } from 'antd-mobile';

class Wiki extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      imgHeight: 176,
    }
  }

  render() {
    const newCate = this.props.categories.map((value) => {
      return {
        icon: value.imgUrl,
        text: value.title,
        id: value.id
      }
    })
    return (
      <div>
        <Carousel
          autoplay={false}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imgUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Grid 
          data={newCate} 
          columnNum={3} 
          hasLine={false}
          onClick={this.handleGridClick.bind(this)}
        />
      </div>
    )
  }

  componentDidMount() {
    this.props.getCategories()

    fetch('/api/swiper')
      .then(response => response.json())
      .then(result => {
        this.setState((prevState) => {
          return {
            data: [...prevState.data, ...result.data]
          }
        })
      })
  }

  handleGridClick(el, index) {
    this.props.setHomeComponent({
      component: 'wiki_list',
      id: el.id
    })
    this.props.history.push('/home/wikilist')
  }
}

export default Wiki