import {Tabs} from 'antd';
import {TabContent} from 'Components/ForecastWeather/TabContent';
import {TabTitle} from 'Components/ForecastWeather/TabTitle';
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
            <Tabs style={{color: 'white'}}>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[0]} />} key={1}>
                    <TabContent hourWeather={forecastWeather[0].hour} />
                </TabPane>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[1]} />} key={2}>
                    <TabContent hourWeather={forecastWeather[1].hour} />
                </TabPane>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[2]} />} key={3}>
                    <TabContent hourWeather={forecastWeather[2].hour} />
                </TabPane>
            </Tabs> : <div>11</div>
        }
        </div>
    )
};