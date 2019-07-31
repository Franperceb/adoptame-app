import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'



mapboxgl.accessToken =
  'pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A'

class MapCont extends Component {
  state = {
    lng: -99.156696,
    lat: 19.420461,
    zoom: 11
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

  }

  render() {
    return (
      <div style={{ width: '300px', height: '200px' }} ref={e => (this.mapContainer = e)}/>
    )
  }
}

export default MapCont    

 