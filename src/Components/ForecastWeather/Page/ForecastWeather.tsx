import {Tabs} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {useEffect} from 'react';
import {ECurrentDay} from 'Common/Enums';
import {ForecastCollapseComp} from 'Components/ForecastWeather/Components/ForecastCollapseComp';
import {ForecastTabTitle} from 'Components/ForecastWeather/Components/ForecastTabTitle';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

const {TabPane} = Tabs;

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {inputCityValue} = useAppSelector((state) => state.current);
    const {forecastWeather} = useAppSelector((state) => state.forecast);
    const isLoading = useAppSelector((state) => state.current.isLoading);

    useEffect(() => {
        dispatch(loadForecastWeather(inputCityValue));
    }, [dispatch]);

    return (
        <>
            {!isLoading && (
                <div className={styles.forecast}>
                    {forecastWeather.length !== 0 ? (
                        <Tabs className={styles.Tab} style={{color: 'white'}}>
                            <TabPane tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.TODAY]} />} key={ECurrentDay.TODAY}>
                                <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.TODAY]} />
                            </TabPane>
                            <TabPane
                                tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.TOMORROW]} />}
                                key={ECurrentDay.TOMORROW}
                            >
                                <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.TOMORROW]} />
                            </TabPane>
                            <TabPane
                                tab={<ForecastTabTitle dayWeather={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />}
                                key={ECurrentDay.AFTER_TOMORROW}
                            >
                                <ForecastCollapseComp forecastDay={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />
                            </TabPane>
                        </Tabs>
                    ) : (
                        <div>Загрузка...</div>
                    )}
                </div>
            )}
        </>
    );
};
