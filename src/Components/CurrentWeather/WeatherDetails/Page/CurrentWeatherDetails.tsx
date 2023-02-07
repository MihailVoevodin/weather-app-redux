import {useAppSelector} from 'hooks';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {formatPressure, formatWindSpeed} from 'Common/Utils/FormatWeatherDetailsHelper';
import {WindDirectionImagesHelper} from 'Common/Utils/WindDirectionImagesHelper';
import {getCurrentWeather, getIsLoading} from 'Components/CurrentWeather/Redux/selectors';
import styles from 'Components/CurrentWeather/WeatherDetails/Styles/WeatherDetails.module.css';

/**
 * Компонент отображения деталей текущей погоды.
 */
export const CurrentWeatherDetails: React.FC = () => {
    const {t} = useTranslation();
    const {current} = useAppSelector(getCurrentWeather);
    const isLoading = useAppSelector(getIsLoading);
    return (
        <>
            {!isLoading && (
                <div className={styles.details}>
                    <div>
                        {t('currentWeatherDetails.humidity')}
                        <span>{current?.humidity} %</span>
                    </div>
                    <div>
                        {t('currentWeatherDetails.wind')}
                        <span>
                            {formatWindSpeed(current?.wind_mph)} {t('weatherUnits.m/s')}
                        </span>
                    </div>
                    <div>
                        {t('currentWeatherDetails.windDirection')}
                        <img src={WindDirectionImagesHelper(current?.wind_dir)} alt={current?.wind_dir} />
                    </div>
                    <div>
                        {t('currentWeatherDetails.pressure')}
                        <span>
                            {formatPressure(current?.pressure_mb)} {t('weatherUnits.mmHg')}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};
