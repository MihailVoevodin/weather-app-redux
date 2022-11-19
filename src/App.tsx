import {WeatherDetails} from 'Components/WeatherDetails/WeatherDetails';
import React from 'react';
import './App.css';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';
import {CurrentWeather} from 'Components/CurrentWeather/CurrentWeather';
import {ForecastWeather} from 'Components/ForecastWeather/ForecastWeather';

function App() {
  return (
    <div className="App">
        <SearchPanel/>
        <div className="CurrentWeather">
            <CurrentWeather/>
            <WeatherDetails/>
            <ForecastWeather/>
        </div>
    </div>
  );
}

export default App;
