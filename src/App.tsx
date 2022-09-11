import React from 'react';
import './App.css';
import {SearchPanel} from './Components/SearchPanel/SearchPanel';
import {CurrentWeather} from 'Components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="App">
        <SearchPanel/>
        <CurrentWeather/>
    </div>
  );
}

export default App;
