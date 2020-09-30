import React from 'react';
import './App.scss';
import Header from './components/Header';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import './App.scss';
import WrappedMap from './components/Map';

function App() {
  return (
    <div className="AppWrapper">
      <Header />
      <Input />
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
