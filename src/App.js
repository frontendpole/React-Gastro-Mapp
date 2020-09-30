import React from 'react';
import './App.scss';
import Header from './components/Header';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import './App.scss';
import WrappedMap from './components/Map';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function App() {

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  })
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value)
    setCoordinates(latLng);
    console.log(latLng)
  }

  return (
    <div className="AppWrapper">
      <Header />
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
          <div>
            <input {...getInputProps({ placeholder: "type a gastro place" })} />
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#8ac6d1" : "#fff"
                }

                return <div {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
              })}
            </div>
          </div>}
      </PlacesAutoComplete>
      {/* <Input /> */}
      <div className='MapWrapper'>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCQmH1TW7GbApZJKKRaJGMtaxEenqHIu_k`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
