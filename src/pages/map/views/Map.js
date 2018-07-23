import React, { Component } from 'react'

import '../style.scss'

class Map extends Component {
  // 此处src /map通过charles代理
  render() {
    return (
      <iframe styleName="ifrm" src="/map" title="map"></iframe>
    )
  }
}

export default Map