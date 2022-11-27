import {Tabs} from 'antd';
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
        <>
        {forecastWeather.length !== 0 ?
            <Tabs className={styles.forecast}>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[0]} />} key={1}>
                    <div>11</div>
                </TabPane>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[1]} />} key={2}>
                    <div>12</div>
                </TabPane>
                <TabPane tab={<TabTitle dayWeather={forecastWeather[2]} />} key={3}>
                    <div>13</div>
                </TabPane>
            </Tabs> : <div>11</div>
        }
        </>
    )
};