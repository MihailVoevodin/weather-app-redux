import React from 'react';
import './App.css';
import {useTranslation} from 'react-i18next';
import {CurrentWeather} from 'Components/CurrentWeather/Page/CurrentWeather';
import {CurrentWeatherDetails} from 'Components/CurrentWeather/WeatherDetails/Page/CurrentWeatherDetails';
import {ForecastWeather} from 'Components/ForecastWeather/Page/ForecastWeather';
import {SearchPanel} from 'Components/SearchPanel/SearchPanel';

const App: React.FC = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (language: string) => {
        void i18n.changeLanguage(language);
    };

    return (
        <div className="App">
            <div className="localise">
                <span onClick={() => changeLanguage('ru')}>ru</span>
                <span onClick={() => changeLanguage('en')}>en</span>
            </div>
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
