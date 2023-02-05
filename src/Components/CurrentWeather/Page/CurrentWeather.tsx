import {useAppDispatch, useAppSelector} from 'hooks';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Spinner from 'Common/Components/Spinner';
import {loadDefaultCurrentWeather} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {getCurrentWeather, getIsLoading} from 'Components/CurrentWeather/Redux/selectors';
import styles from 'Components/CurrentWeather/Styles/CurrentWeather.module.css';
const moment = require('moment');

/**
 * Компонент отображения текущей погоды.
 */
const CurrentWeather: React.FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {current, location} = useAppSelector(getCurrentWeather);
    const isLoading = useAppSelector(getIsLoading);
    useEffect(() => {
        void dispatch(loadDefaultCurrentWeather());
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {current && location && (
                        <div>
                            <span className={styles.locationCity}>
                                {location.name}, {location.country}
                            </span>
                            <div>{moment(location.localtime).format('ddd HH:mm - DD MMM')}</div>
                            <div>
                                <div className={styles.temp}>
                                    {current.temp_c} ℃
                                    <span className={styles.tempFeelsLike}>
                                        {t('currentWeather.feelsLike')} {Math.round(current.feelslike_c)} ℃
                                    </span>
                                </div>
                                <div className={styles.condition}>
                                    <img src={current.condition.icon} alt="condition icon" />
                                    <span>{current.condition.text.toLowerCase()}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export {CurrentWeather};
