import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import moment from 'moment';
import React from 'react';
import {IForecast} from 'Redux/ForecastWeatherSlice';

interface IProps {
    dayWeather: IForecast;
}


/**
 * Компонент отображения тайтлов табов прогноза погоды.
 */
const ForecastTabTitle: React.FC<IProps> = ({dayWeather}) => {

    return (
        <div className={styles.dayWeather}>
            <div className={styles.date}>{moment(dayWeather.date).format('ddd DD')}</div>

            <div>
                <img className={styles.icon} src={dayWeather.day.condition.icon} alt='condition icon'/>
                <div className={styles.text}>{dayWeather.day.condition.text}</div>
            </div>
            <div className={styles.temp}>
                <span className={styles.maxtemp}>{dayWeather.day.maxtemp_c}°</span>
                <span className={styles.mintemp}>{dayWeather.day.mintemp_c}°</span>
            </div>
        </div>
    )
}

export {ForecastTabTitle};
