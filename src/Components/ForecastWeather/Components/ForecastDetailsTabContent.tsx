import React from 'react';
import {IForecastWeatherDay} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

/**
 * @param forecastDay Детали прогноза погоды.
 */
interface IProps {
    detailsForecastWeather: IForecastWeatherDay;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastDetailsTabContent: React.FC<IProps> = ({detailsForecastWeather}) => {
    const {avgtemp_c, maxwind_mph, totalprecip_mm, avgvis_km, daily_chance_of_rain, daily_chance_of_snow} = detailsForecastWeather;

    return (
        <div className={styles.detailsTabContent} style={{color: 'white'}}>
            <div>
                Average temperature<span>{avgtemp_c}°</span>
            </div>
            <div>
                Maximum wind speed<span>{maxwind_mph} mph</span>
            </div>
            <div>
                Total precipitation<span>{totalprecip_mm} mm</span>
            </div>
            <div>
                Average visibility<span>{avgvis_km} km</span>
            </div>
            <div>
                {avgtemp_c > 0 ? 'Daily chance of rain' : 'Daily chance of snow'}
                <span>{avgtemp_c > 0 ? daily_chance_of_rain : daily_chance_of_snow} %</span>
            </div>
        </div>
    );
};

export {ForecastDetailsTabContent};
