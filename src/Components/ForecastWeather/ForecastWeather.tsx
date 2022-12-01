import {Tabs, Collapse} from 'antd';
import {ForecastAstroTabContent} from 'Components/ForecastWeather/ForecastAstroTabContent';
import {ForecastDetailsTabContent} from 'Components/ForecastWeather/ForecastDetailsTabContent';
import {ForecastHourlyTabContent} from 'Components/ForecastWeather/ForecastHourlyTabContent';
import {ForecastTabTitle} from 'Components/ForecastWeather/ForecastTabTitle';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/ForecastWeather.module.css';

const {TabPane} = Tabs;
const { Panel } = Collapse;

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
                    <Collapse>
                        <Panel header="Details" key="1">
                            <ForecastDetailsTabContent detailsWeather={forecastWeather[0].day} />
                        </Panel>
                        <Panel header="Astronomy" key="2">
                            <ForecastAstroTabContent astroWeather={forecastWeather[0].astro} />
                        </Panel>
                        <Panel header="Hourly forecast" key="3">
                            <ForecastHourlyTabContent hourWeather={forecastWeather[0].hour} />
                        </Panel>
                    </Collapse>
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[1]} />} key={2}>
                    <Collapse>
                        <Panel header="Details" key="1">
                            <ForecastDetailsTabContent detailsWeather={forecastWeather[1].day} />
                        </Panel>
                        <Panel header="Astronomy" key="2">
                            <ForecastAstroTabContent astroWeather={forecastWeather[1].astro} />
                        </Panel>
                        <Panel header="Hourly forecast" key="3">
                            <ForecastHourlyTabContent hourWeather={forecastWeather[1].hour} />
                        </Panel>
                    </Collapse>
                </TabPane>
                <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[2]} />} key={3}>
                    <Collapse>
                        <Panel header="Details" key="1">
                            <ForecastDetailsTabContent detailsWeather={forecastWeather[2].day} />
                        </Panel>
                        <Panel header="Astronomy" key="2">
                            <ForecastAstroTabContent astroWeather={forecastWeather[2].astro} />
                        </Panel>
                        <Panel header="Hourly forecast" key="3">
                            <ForecastHourlyTabContent hourWeather={forecastWeather[2].hour} />
                        </Panel>
                    </Collapse>
                </TabPane>
            </Tabs> : <div>Загрузка...</div>
        }
        </div>
    )
};