import {WeatherDetails} from 'Components/WeatherDetails/Page/WeatherDetails';
import React from 'react';
import './App.css';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';
import {CurrentWeather} from 'Components/CurrentWeather/Page/CurrentWeather';
import {ForecastWeather} from 'Components/ForecastWeather/ForecastWeather';

const App: React.FC = () => {
  return (
    <div className="App">
        <SearchPanel/>
        <div className="CurrentWeather">
            <CurrentWeather/>
            <WeatherDetails/>
        </div>
        <div className="ForecastWeather">
            <ForecastWeather/>
        </div>
    </div>
  );
}

export default App;
