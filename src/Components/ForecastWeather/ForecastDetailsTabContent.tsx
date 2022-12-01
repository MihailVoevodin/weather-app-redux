import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import React from 'react';
import {IDetailsForecast} from 'Redux/ForecastWeatherSlice';

interface IProps {
    detailsWeather: IDetailsForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastDetailsTabContent: React.FC<IProps> = ({detailsWeather}): any => {
    //TODO: сделать хелпер на вывод либо дождя либо снега
    return (
        <div className={styles.astroTabContent}>
            <div>Average temperature: {detailsWeather.avgtemp_c}</div>
            <div>Maximum wind speed:  {detailsWeather.maxwind_mph}</div>
            <div>Total precipitation:  {detailsWeather.totalprecip_mm}</div>
            <div>Average visibility:  {detailsWeather.avgvis_km}</div>
            <div>Daily chance of rain:  {detailsWeather.daily_chance_of_rain}</div>
        </div>
    )
}

export {ForecastDetailsTabContent};