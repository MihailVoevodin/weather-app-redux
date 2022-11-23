import moment from 'moment';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/ForecastWeather.module.css';

interface IForecastWeather {
    date: string;
    day: IForecastWeatherDay;
}

interface IForecastWeatherDay {
    maxtemp_c: number;
    mintemp_c: number;
    condition: IForecastWeatherDayCondition;
}

interface IForecastWeatherDayCondition {
    text: string;
    icon: string;
}

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {inputCityValue} = useAppSelector(state => state.current)
    const {forecastWeather} = useAppSelector(state => state.forecast)

    useEffect(() => {
        dispatch(loadForecastWeather(inputCityValue))
    }, [dispatch])

    return (
        <div className={styles.forecast}>
            {forecastWeather.map((dayWeather: IForecastWeather) => (
                <div className={styles.dayWeather}>
                    <div className={styles.date}>{moment(dayWeather.date).format('ddd DD')}</div>

                    <div>
                        <img className={styles.icon} src={dayWeather.day.condition.icon} alt='condition icon'/>
                        <div className={styles.text}>{dayWeather.day.condition.text}</div>
                    </div>
                    <div className={styles.temp}>
                        <span className={styles.maxtemp}>{dayWeather.day.maxtemp_c}</span>
                        <span className={styles.mintemp}>{dayWeather.day.mintemp_c}</span>
                    </div>
                </div>
            ))}
        </div>
    )
};