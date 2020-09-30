import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyCQmH1TW7GbApZJKKRaJGMtaxEenqHIu_k');
Geocode.enableDebug();


const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 52.229675, lng: 21.012230 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default WrappedMap;