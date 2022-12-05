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
        <div className={styles.detailsTabContent} style={{color: 'white'}}>
            <div>Average temperature<span>{detailsWeather.avgtemp_c}°</span></div>
            <div>Maximum wind speed<span>{detailsWeather.maxwind_mph} mph</span></div>
            <div>Total precipitation<span>{detailsWeather.totalprecip_mm} mm</span></div>
            <div>Average visibility<span>{detailsWeather.avgvis_km} km</span></div>
            <div>Daily chance of rain<span>{detailsWeather.daily_chance_of_rain} %</span></div>
        </div>
    )
}

export {ForecastDetailsTabContent};