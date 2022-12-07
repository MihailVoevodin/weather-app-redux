import React from 'react';
import {useAppSelector} from 'hooks';
import styles from 'Components/WeatherDetails/Styles/WeatherDetails.module.css';

/**
 * Компонент отображения текущей погоды.
 */
export const WeatherDetails: React.FC = () => {
    const {current} = useAppSelector(state => state.current.currentWeather)
    const isLoading = useAppSelector(state => state.current.isLoading)

    return (
        <>
        {!isLoading && <div className={styles.details}>
        <div className={styles.detailsItem}>Humidity<span>{current?.humidity} %</span></div>
        <div className={styles.detailsItem}>Wind<span>{current?.wind_mph} mph</span></div>
        <div className={styles.detailsItem}>Wind direction<span>{current?.wind_dir}</span></div>
        <div className={styles.detailsItem}>Pressure<span>{current?.pressure_mb} hPa</span></div>
        </div>}
        </>
    )
}