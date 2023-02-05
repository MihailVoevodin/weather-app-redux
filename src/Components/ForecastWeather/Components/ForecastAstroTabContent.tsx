import React from 'react';
import {useTranslation} from 'react-i18next';
import {countDayLength} from 'Common/Utils/CountDayLengthHelper';
import {IAstroForecast} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

/**
 * @param astroWeather Астрология прогноза погоды.
 */
interface IProps {
    astroForecastWeather: IAstroForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastAstroTabContent: React.FC<IProps> = ({astroForecastWeather}) => {
    const {t} = useTranslation();
    const {sunrise, sunset} = astroForecastWeather;

    return (
        <div className={styles.astroTabContent} style={{color: 'white'}}>
            <div>
                {t('forecastWeather.Astro.sunrise')}
                <span>{sunrise}</span>
            </div>
            <div>
                {t('forecastWeather.Astro.sunset')}
                <span>{sunset}</span>
            </div>
            <div>
                {t('forecastWeather.Astro.dayLength')}
                <span>{countDayLength(sunrise, sunset)}</span>
            </div>
        </div>
    );
};

export {ForecastAstroTabContent};
