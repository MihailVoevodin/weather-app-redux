import React from 'react';
import './App.css';
import {CurrentWeather} from 'Components/CurrentWeather/Page/CurrentWeather';
import {WeatherDetails} from 'Components/CurrentWeather/WeatherDetails/Page/WeatherDetails';
import {ForecastWeather} from 'Components/ForecastWeather/Page/ForecastWeather';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';

const App: React.FC = () => {
    return (
        <div className="App">
            <SearchPanel />
            <div className="CurrentWeather">
                <CurrentWeather />
                <WeatherDetails />
            </div>
            <div className="ForecastWeather">
                <ForecastWeather />
            </div>
        </div>
    );
};

export default App;
