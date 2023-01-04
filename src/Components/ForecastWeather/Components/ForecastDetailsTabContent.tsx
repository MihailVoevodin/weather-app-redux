import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import React from 'react';
import {IDetailsForecast} from 'Components/ForecastWeather/Models';

/**
 * @param forecastDay Детали прогноза погоды.
 */
interface IProps {
    detailsWeather: IDetailsForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastDetailsTabContent: React.FC<IProps> = ({detailsWeather}) => {

    return (
        <div className={styles.detailsTabContent} style={{color: 'white'}}>
            <div>Average temperature<span>{detailsWeather.avgtemp_c}°</span></div>
            <div>Maximum wind speed<span>{detailsWeather.maxwind_mph} mph</span></div>
            <div>Total precipitation<span>{detailsWeather.totalprecip_mm} mm</span></div>
            <div>Average visibility<span>{detailsWeather.avgvis_km} km</span></div>
            <div>{detailsWeather.avgtemp_c > 0 ? 'Daily chance of rain' : 'Daily chance of snow'}
                <span>{detailsWeather.avgtemp_c > 0 ? detailsWeather.daily_chance_of_rain : detailsWeather.daily_chance_of_snow} %</span>
            </div>
        </div>
    )
}

export {ForecastDetailsTabContent};
