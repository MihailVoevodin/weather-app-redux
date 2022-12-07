import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import moment from 'moment';
import React from 'react';
import {IHourForecast} from 'Components/ForecastWeather/Models';
import { Carousel } from 'antd';
import 'Components/ForecastWeather/Styles/Forecast.css';

interface IProps {
    hourWeather: IHourForecast[];
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastHourlyTabContent: React.FC<IProps> = ({hourWeather}): any => {

    return (
        <Carousel arrows={true}
                  className={styles.tabContent}
                  dots={false}
                  style={{color: 'white'}}
                  slidesToShow={6}
                  slidesToScroll={6}>
            {hourWeather.map((hour: IHourForecast, index) => (
                <div className={styles.tabContentItem} key={index}>
                    <div className={styles.date}>{moment(hour.time).format('LT')}</div>
                    <div className={styles.temp}>
                        {hour.temp_c}°
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export {ForecastHourlyTabContent};
