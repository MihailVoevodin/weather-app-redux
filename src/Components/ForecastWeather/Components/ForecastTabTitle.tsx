import moment from 'moment';
import React from 'react';
import {IForecast} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

/**
 * @param dayWeather Основная информация таба прогноза погоды.
 */
interface IProps {
    forecastWeather: IForecast;
}

/**
 * Компонент отображения тайтлов табов прогноза погоды.
 */
const ForecastTabTitle: React.FC<IProps> = ({forecastWeather}) => {
    const {
        day: {
            condition: {text, icon},
            maxtemp_c,
            mintemp_c,
        },
        date,
    } = forecastWeather;

    return (
        <div className={styles.dayWeather}>
            <div className={styles.date}>{moment(date).format('ddd DD')}</div>

            <div>
                <img className={styles.hourlyIcon} src={icon} alt="condition icon" />
                <div className={styles.text}>
                    {text.length > 20 ? text.split(' ')[3][0].toUpperCase() + text.split(' ')[3].substring(1) : text}
                </div>
            </div>
            <div className={styles.temp}>
                <span>{maxtemp_c}°</span>
                <span className={styles.mintemp}>{mintemp_c}°</span>
            </div>
        </div>
    );
};

export {ForecastTabTitle};
