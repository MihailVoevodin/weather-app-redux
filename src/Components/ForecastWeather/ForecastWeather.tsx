import {Tabs} from 'antd';
import {ForecastTabTitle} from 'Components/ForecastWeather/ForecastTabTitle';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import {ForecastCollapseComp} from 'Components/ForecastWeather/ForecastCollapseComp';

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
                    <ForecastCollapseComp forecastDay={forecastWeather[0]} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[1]} />} key={2}>
                    <ForecastCollapseComp forecastDay={forecastWeather[1]} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[2]} />} key={3}>
                    <ForecastCollapseComp forecastDay={forecastWeather[2]} />
                </TabPane>
            </Tabs> : <div>Загрузка...</div>
        }
        </div>
    )
};