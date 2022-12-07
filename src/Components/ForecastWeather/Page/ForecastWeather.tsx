import {Tabs} from 'antd';
import {ECurrentDay} from 'Common/Enums';
import {ForecastTabTitle} from 'Components/ForecastWeather/Components/ForecastTabTitle';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import {ForecastCollapseComp} from 'Components/ForecastWeather/Components/ForecastCollapseComp';

const {TabPane} = Tabs;

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {inputCityValue} = useAppSelector(state => state.current)
    const {forecastWeather} = useAppSelector(state => state.forecast)

    useEffect(() => {
        dispatch(loadForecastWeather(inputCityValue))
    }, [dispatch])

    return (
        <div className={styles.forecast}>
        {forecastWeather.length !== 0 ?
            <Tabs className={styles.Tab} style={{color: 'white'}}>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.TODAY]} />} key={ECurrentDay.TODAY}>
                    <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.TODAY]} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.TOMORROW]} />} key={ECurrentDay.TOMORROW}>
                    <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.TOMORROW]} />
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />} key={ECurrentDay.AFTER_TOMORROW}>
                    <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />
                </TabPane>
            </Tabs> : <div>Загрузка...</div>
        }
        </div>
    )
};
