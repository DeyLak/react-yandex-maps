/* eslint-disable import/no-webpack-loader-syntax */

import React from 'react'

import Demo from './Demo'

import MapBasics from 'sandbox/map/MapBasics'
import rawMapBasics from '!raw-loader!sandbox/map/MapBasics'

import MapParams from 'sandbox/map/MapParams'
import rawMapParams from '!raw-loader!sandbox/map/MapParams'

import FillContainer from 'sandbox/map/FillContainer'
import rawFillContainer from '!raw-loader!sandbox/map/FillContainer'

import Placemark from 'sandbox/geoobjects/Placemark'
import rawPlacemark from '!raw-loader!sandbox/geoobjects/Placemark'

import IconCustomImage from 'sandbox/geoobjects/IconCustomImage'
import rawIconCustomImage from '!raw-loader!sandbox/geoobjects/IconCustomImage'

import Polyline from 'sandbox/geoobjects/Polyline'
import rawPolyline from '!raw-loader!sandbox/geoobjects/Polyline'

import Rectangle from 'sandbox/geoobjects/Rectangle'
import rawRectangle from '!raw-loader!sandbox/geoobjects/Rectangle'

const demos = {
  map: {
    'map-basics': {
      name: 'Putting the map on a page',
      component: MapBasics,
      src: rawMapBasics
    },
    'map-params': {
      name: 'Setting and changing the map settings',
      component: MapParams,
      src: rawMapParams
    },
    'fill-container': {
      name: 'Resizing the map',
      component: FillContainer,
      src: rawFillContainer
    }
  },

  geoobjects: {
    placemark: {
      name: 'Placemark',
      component: Placemark,
      src: rawPlacemark
    },
    'icon-custom-image': {
      name: 'Setting a custom placemark image',
      component: IconCustomImage,
      src: rawIconCustomImage
    },
    polyline: {
      name: 'Polylines',
      component: Polyline,
      src: rawPolyline
    },
    rectangle: {
      name: 'Rectangle',
      component: Rectangle,
      src: rawRectangle
    }
  }
}

const DemoProvider = ({match}) => {
  if (!match) return null

  const { demoGroup, demoName } = match.params
  const demoProps = demos[demoGroup][demoName]

  return <Demo {...demoProps} />
}

export default DemoProvider
