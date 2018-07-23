import React from 'react'

import './style.scss'

import { List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

const handleItemClick = ({id, history, from}) => {
  history.push('/detail/' + id + '/' + from)
}

const DataList = ({history, datalist, from}) => {
  // console.log(from)
  return (
    <List>
      {
        datalist.map((value, index) => {
          return (
            <Item
              arrow="horizontal"
              thumb={value.imgUrl}
              multipleLine
              onClick={() => handleItemClick({id: value.id, history, from})}
              key={index}
              styleName="thumb"
            >
              <span styleName="thumb">{value.title}</span> <Brief>{value.desc}</Brief>
            </Item>
          )
        })
      }
    </List>
  )
}

export default DataList
