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
    const {avgtemp_c, maxwind_mph, totalprecip_mm, avgvis_km, avghumidity, daily_chance_of_rain, daily_chance_of_snow} =
        detailsForecastWeather;

    return (
        <div className={styles.detailsTabContent} style={{color: 'white'}}>
            <div>
                Avg. temperature<span>{avgtemp_c}°</span>
            </div>
            <div>
                Max wind speed<span>{maxwind_mph} mph</span>
            </div>
            <div>
                Total precipitation<span>{totalprecip_mm} mm</span>
            </div>
            <div>
                Avg. visibility<span>{avgvis_km} km</span>
            </div>
            <div>
                Avg. humidity<span>{avghumidity} %</span>
            </div>
            <div>
                {avgtemp_c > 0 ? 'Chance of rain' : 'Chance of snow'}
                <span>{avgtemp_c > 0 ? daily_chance_of_rain : daily_chance_of_snow} %</span>
            </div>
        </div>
    );
};

export {ForecastDetailsTabContent};
