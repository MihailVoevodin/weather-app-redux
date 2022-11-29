import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import moment from 'moment';
import React from 'react';
import {IHourForecast} from 'Redux/ForecastWeatherSlice';

interface IProps {
    hourWeather: IHourForecast[];
}

interface ITabContent {
    time: string;
    temp_c: number;
}

const TabContent: React.FC<IProps> = ({hourWeather}): any => {


    return (
        <div className={styles.TabContent}>
            {hourWeather.map((hour: ITabContent, index) => (
                <div key={index}>
                    <div className={styles.date}>{moment(hour.time).format('LT')}</div>
                    <div className={styles.temp}>
                        {hour.temp_c}
                    </div>
                </div>
            ))}
        </div>
    )
}

export {TabContent};