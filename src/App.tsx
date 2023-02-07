import React from 'react';
import './App.css';
import {CurrentWeather} from 'Components/CurrentWeather/Page/CurrentWeather';
import {CurrentWeatherDetails} from 'Components/CurrentWeather/WeatherDetails/Page/CurrentWeatherDetails';
import {ForecastWeather} from 'Components/ForecastWeather/Page/ForecastWeather';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';
import {Translation} from 'Components/Translation/Translation';

const App: React.FC = () => {
    return (
        <div className="App">
            <Translation />
            <SearchPanel />
            <div className="CurrentWeather">
                <CurrentWeather />
                <CurrentWeatherDetails />
            </div>
            <div className="ForecastWeather">
                <ForecastWeather />
            </div>
        </div>
    );
};

export default App;
