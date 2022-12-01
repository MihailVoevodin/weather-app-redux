import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import moment from 'moment';
import React from 'react';
import {IHourForecast} from 'Redux/ForecastWeatherSlice';

interface IProps {
    hourWeather: IHourForecast[];
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastHourlyTabContent: React.FC<IProps> = ({hourWeather}): any => {

    return (
        <div className={styles.tabContent}>
            {hourWeather.map((hour: IHourForecast, index) => (
                <div className={styles.tabContentItem} key={index}>
                    <div className={styles.date}>{moment(hour.time).format('LT')}</div>
                    <div className={styles.temp}>
                        {hour.temp_c}°
                    </div>
                </div>
            ))}
        </div>
    )
}

export {ForecastHourlyTabContent};
