import {Carousel} from 'antd';
import {useAppSelector} from 'hooks';
import moment from 'moment';
import React from 'react';
import {ForecastHourlyWeatherGraph} from 'Components/ForecastWeather/Components/ForecastHourWeatherGraph';
import {IHourForecast} from 'Components/ForecastWeather/Models';
import {getCurrentWeatherTime} from 'Components/ForecastWeather/Redux/selectors';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import 'Components/ForecastWeather/Styles/Forecast.css';

/**
 * @param hourWeather Почасовой прогноз погоды.
 */
interface IProps {
    hourForecastWeather: IHourForecast[];
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastHourlyTabContent: React.FC<IProps> = ({hourForecastWeather}) => {
    const currentWeatherTime = useAppSelector(getCurrentWeatherTime);

    const isCurrentTimeEqual = (hourTime: string): boolean => {
        if (currentWeatherTime == moment(hourTime).format('HH')) {
            return true;
        }
        return false;
    };

    return (
        <>
            <Carousel arrows={true} dots={false} style={{color: 'white'}} slidesToShow={6} slidesToScroll={3}>
                {hourForecastWeather.map((hour: IHourForecast, index) => (
                    <div
                        className={`${styles.tabContentItem} ${isCurrentTimeEqual(hour.time) ? styles.tabContentItemActive : ''}`}
                        key={index}
                    >
                        <div className={styles.hourlyTime}>{moment(hour.time).format('HH:mm')}</div>
                        <img className={styles.hourlyIcon} src={hour.condition.icon} alt="condition icon" />
                        <div className={styles.hourlyTemp}>{hour.temp_c}°</div>
                    </div>
                ))}
            </Carousel>
            <ForecastHourlyWeatherGraph hourForecastWeather={hourForecastWeather} />
        </>
    );
};

export {ForecastHourlyTabContent};
