import {
    WindDirectionImagesHelper
} from 'Components/WeatherDetails/Utils/WindDirectionImagesHelper';
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
        <div>Humidity<span>{current?.humidity} %</span></div>
        <div>Wind<span>{current?.wind_mph} mph</span></div>
        <div>
            Wind direction
            <img src={WindDirectionImagesHelper(current?.wind_dir)} alt={current?.wind_dir} />
        </div>
        <div>Pressure<span>{current?.pressure_mb} hPa</span></div>
        </div>}
        </>
    )
}
