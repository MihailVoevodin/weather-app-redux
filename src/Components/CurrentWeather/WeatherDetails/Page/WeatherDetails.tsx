import {useAppSelector} from 'hooks';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {getCurrentWeather, getIsLoading} from 'Components/CurrentWeather/Redux/selectors';
import {formatPressure, formatWindSpeed} from 'Components/CurrentWeather/WeatherDetails/Helpers/FormatWeatherDetailsHelper';
import {WindDirectionImagesHelper} from 'Components/CurrentWeather/WeatherDetails/Helpers/WindDirectionImagesHelper';
import styles from 'Components/CurrentWeather/WeatherDetails/Styles/WeatherDetails.module.css';

/**
 * Компонент отображения текущей погоды.
 */
export const WeatherDetails: React.FC = () => {
    const {t} = useTranslation();
    const {current} = useAppSelector(getCurrentWeather);
    const isLoading = useAppSelector(getIsLoading);
    return (
        <>
            {!isLoading && (
                <div className={styles.details}>
                    <div>
                        {t('humidity')}
                        <span>{current?.humidity} %</span>
                    </div>
                    <div>
                        {t('wind')}
                        <span>
                            {formatWindSpeed(current?.wind_mph)} {t('windSpeedUnits')}
                        </span>
                    </div>
                    <div>
                        {t('windDirection')}
                        <img src={WindDirectionImagesHelper(current?.wind_dir)} alt={current?.wind_dir} />
                    </div>
                    <div>
                        {t('pressure')}
                        <span>
                            {formatPressure(current?.pressure_mb)} {t('pressureUnits')}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};
