import {ForecastHourlyWeatherGraph} from 'Components/ForecastWeather/Components/ForecastHourWeatherGraph';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import moment from 'moment';
import React from 'react';
import {IHourForecast} from 'Components/ForecastWeather/Models';
import { Carousel } from 'antd';
import 'Components/ForecastWeather/Styles/Forecast.css';

/**
 * @param hourWeather Почасовой прогноз погоды.
 */
interface IProps {
    hourWeather: IHourForecast[];
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastHourlyTabContent: React.FC<IProps> = ({hourWeather}) => {

    return (
        <>
        <Carousel arrows={true}
                  className={styles.tabContent}
                  dots={false}
                  style={{color: 'white'}}
                  slidesToShow={6}
                  slidesToScroll={6}>
            {hourWeather.map((hour: IHourForecast, index) => (
                <div className={styles.tabContentItem} key={index}>
                    <div className={styles.date}>{moment(hour.time).format('HH:mm')}</div>
                    <img className={styles.icon} src={hour.condition.icon} alt='condition icon'/>
                    <div className={styles.temp}>
                        {hour.temp_c}°
                    </div>
                </div>
            ))}
        </Carousel>
        <ForecastHourlyWeatherGraph hourWeather={hourWeather} />
        </>
    )
}

export {ForecastHourlyTabContent};
