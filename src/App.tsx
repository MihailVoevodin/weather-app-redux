import {WeatherDetails} from 'Components/WeatherDetails/WeatherDetails';
import React from 'react';
import './App.css';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';
import {CurrentWeather} from 'Components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="App">
        <div>
            <SearchPanel/>
            <CurrentWeather/>
        </div>
        <WeatherDetails/>
    </div>
  );
}

export default App;
