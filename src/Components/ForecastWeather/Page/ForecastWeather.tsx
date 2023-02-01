import {Tabs} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {useEffect} from 'react';
import {ECurrentDay} from 'Common/Enums';
import {getIsLoading} from 'Components/CurrentWeather/Redux/selectors';
import {ForecastCollapseComp} from 'Components/ForecastWeather/Components/ForecastCollapseComp';
import {ForecastTabTitle} from 'Components/ForecastWeather/Components/ForecastTabTitle';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import {getForecastWeather, getInputCityValue} from 'Components/ForecastWeather/Redux/selectors';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

const {TabPane} = Tabs;

/**
 * Компонент отображения прогноза погоды.
 */
export const ForecastWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const inputCityValue = useAppSelector(getInputCityValue);
    const forecastWeather = useAppSelector(getForecastWeather);
    const isLoading = useAppSelector(getIsLoading);

    useEffect(() => {
        void dispatch(loadForecastWeather(inputCityValue));
    }, [dispatch]);

    return (
        <>
            {!isLoading && (
                <div className={styles.forecast}>
                    {forecastWeather.length !== 0 ? (
                        <Tabs className={styles.Tab} style={{color: 'white'}}>
                            <TabPane
                                tab={<ForecastTabTitle forecastWeather={forecastWeather[ECurrentDay.TODAY]} />}
                                key={ECurrentDay.TODAY}
                            >
                                <ForecastCollapseComp forecastWeather={forecastWeather[ECurrentDay.TODAY]} />
                            </TabPane>
                            <TabPane
                                tab={<ForecastTabTitle forecastWeather={forecastWeather[ECurrentDay.TOMORROW]} />}
                                key={ECurrentDay.TOMORROW}
                            >
                                <ForecastCollapseComp forecastWeather={forecastWeather[ECurrentDay.TOMORROW]} />
                            </TabPane>
                            <TabPane
                                tab={<ForecastTabTitle forecastWeather={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />}
                                key={ECurrentDay.AFTER_TOMORROW}
                            >
                                <ForecastCollapseComp forecastWeather={forecastWeather[ECurrentDay.AFTER_TOMORROW]} />
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
