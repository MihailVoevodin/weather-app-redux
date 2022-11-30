import {Tabs} from 'antd';
import {ForecastHourTabContent} from 'Components/ForecastWeather/ForecastTabContent';
import {ForecastTabTitle} from 'Components/ForecastWeather/ForecastTabTitle';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/ForecastWeather.module.css';

const {TabPane} = Tabs;

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {inputCityValue} = useAppSelector(state => state.current)
    const {forecastWeather} = useAppSelector(state => state.forecast)
    console.log(forecastWeather)

    useEffect(() => {
        dispatch(loadForecastWeather(inputCityValue))
    }, [dispatch])

    return (
        <div className={styles.forecast}>
        {forecastWeather.length !== 0 ?
            <Tabs className={styles.Tab} style={{color: 'white'}}>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[0]} />} key={1}>
                    <ForecastHourTabContent hourWeather={forecastWeather[0].hour} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[1]} />} key={2}>
                    <ForecastHourTabContent hourWeather={forecastWeather[1].hour} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[2]} />} key={3}>
                    <ForecastHourTabContent hourWeather={forecastWeather[2].hour} />
                </TabPane>
            </Tabs> : <div>Загрузка...</div>
        }
        </div>
    )
};