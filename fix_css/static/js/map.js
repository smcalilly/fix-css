import React from 'react'
import ReactDOM from 'react-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Button from 'react-bootstrap/Button'

function BaseMap({ center, zoom, className, children }) {
    return (
      <div className='map-viewer'>
        <Button>bootstrap button</Button>
        <MapContainer
          center={center}
          zoom={zoom}
          className={className}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_parent">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_parent">CARTO</a>'
            />
            {children}
        </MapContainer>
      </div>
    )
}

function Home(props) {
  return (
    <div>
      <div className="container-fluid mb-1 jumbotron">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h1 className="mb-3">Django-React Integration</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-5 pb-4 text-center">
          <BaseMap />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  React.createElement(Home, window.props),
  window.reactMount,
)
