import React, { Component } from 'react'

import '../style.scss'

class Map extends Component {
  render() {
    return (
      <iframe styleName="ifrm" src="/map" title="map"></iframe>
    )
  }
}

export default Map