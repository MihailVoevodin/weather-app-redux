import React from 'react';
import {useAppSelector} from 'hooks';
import styles from 'Components/WeatherDetails/WeatherDetails.module.css';

/**
 * Компонент отображения текущей погоды.
 */
export const WeatherDetails: React.FC = () => {
    const {current} = useAppSelector(state => state.current.currentWeather)


    return (
        <div className={styles.details}>
            <div>Humidity {current.humidity} %</div>
            <div>Wind {current.wind_mph} mph</div>
            <div>Wind direction {current.wind_dir}</div>
            <div>Pressure {current.pressure_mb} hPa</div>
        </div>
    )
}