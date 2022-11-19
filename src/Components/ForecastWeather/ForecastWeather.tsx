import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/ForecastWeather.module.css';

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {inputCityValue} = useAppSelector(state => state.current)

    useEffect(() => {
        dispatch(loadForecastWeather(inputCityValue))
    }, [dispatch])

    return (
        <>
            <h1 className={styles.main}>Forecast</h1>
        </>
    )
};