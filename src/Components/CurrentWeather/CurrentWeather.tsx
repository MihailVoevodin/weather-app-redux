import Spinner from 'Common/Components/Spinner';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadDefaultCurrentWeather} from 'Redux/CurrentWeatherSlice';
import styles from 'Components/CurrentWeather/CurrentWeather.module.css';
const moment = require('moment');

/**
 * Компонент отображения текущей погоды.
 */
export const CurrentWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {current, location} = useAppSelector(state => state.current.currentWeather)
    const isLoading = useAppSelector(state => state.current.isLoading)

    useEffect(() => {
        dispatch(loadDefaultCurrentWeather()) //TODO: поменять в апишке возвращаемые поля
    }, [dispatch])

    return (
        <>
        {isLoading
            ? <Spinner/>
            : <div>
                <span className={styles.locationCity}>{location.name}, {location.country}</span>
                <div>{moment(location.localtime).format('ddd HH:mm - DD MMM')}</div>
                <div>
                    <div className={styles.temp}>
                        {current.temp_c} ℃
                        <span className={styles.tempFeelsLike}>feels like {Math.round(current.feelslike_c)} ℃</span>
                    </div>
                    <div className={styles.condition}>
                        <img src={current.condition.icon} alt='condition icon'/>
                        <span>{current.condition.text.toLowerCase()}</span>
                    </div>

                </div>
            </div>
        }
        </>
    )
}
