// 此Home组件，称之为 容器组件

import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import '../style.scss'

import wiki from '../../../assets/icons/wiki.svg'
import wikiLight from '../../../assets/icons/wiki-light.svg'
import hot from '../../../assets/icons/hot.svg'
import hotLight from '../../../assets/icons/hot-light.svg'
import map from '../../../assets/icons/map.svg'
import mapLight from '../../../assets/icons/map-light.svg'
import setting from '../../../assets/icons/setting.svg'
import settingLight from '../../../assets/icons/setting-light.svg'

import { Ui as Wiki } from '../../wiki'
import { Ui as Setting } from '../../setting'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'wiki',
      hidden: false
    }
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="百科"
            key="wiki"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + wiki + ') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + wikiLight + ') center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'wiki'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'wiki',
              });
            }}
            data-seed="logId"
          >
            {this.props.homeComponent.component === 'wiki' ? <Wiki /> : (<div>xxx</div>)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + hot + ') center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + hotLight + ') center center /  21px 21px no-repeat' }}
              />
            }
            title="热卖"
            key="hot"
            badge={'new'}
            selected={this.state.selectedTab === 'hot'}
            onPress={() => {
              this.setState({
                selectedTab: 'hot',
              });
            }}
            data-seed="logId1"
          >
            <div>热卖</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + map + ') center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + mapLight + ') center center /  21px 21px no-repeat' }}
              />
            }
            title="地图"
            key="map"
            dot
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
            data-type="map"
          >
            {false ? (<div>ccc</div>) : (<div>xxx</div>)}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: setting }}
            selectedIcon={{ uri: settingLight }}
            title="设置"
            key="setting"
            selected={this.state.selectedTab === 'setting'}
            onPress={() => {
              this.setState({
                selectedTab: 'setting',
              });
            }}
          >
            <Setting></Setting>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }

  componentDidMount() {
    this.setVisible()
  }

  componentDidUpdate() {    
    this.setVisible()
  }


  setVisible() {
    if (this.props.isShow) {
      document.querySelector('div[data-type="map"]').style.display = 'flex'
    } else {
      document.querySelector('div[data-type="map"]').style.display = 'none'
    }
  }
}

export default Home