import React from 'react';
import {useTranslation} from 'react-i18next';
import {formatWindSpeed} from 'Common/Utils/FormatWeatherDetailsHelper';
import {IForecastWeatherDay} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

/**
 * @param forecastDay Детали прогноза погоды.
 */
interface IProps {
    detailsForecastWeather: IForecastWeatherDay;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastDetailsTabContent: React.FC<IProps> = ({detailsForecastWeather}) => {
    const {t} = useTranslation();
    const {avgtemp_c, maxwind_mph, totalprecip_mm, avgvis_km, avghumidity, daily_chance_of_rain, daily_chance_of_snow} =
        detailsForecastWeather;

    return (
        <div className={styles.detailsTabContent} style={{color: 'white'}}>
            <div>
                {t('forecastWeather.Details.avgTemperature')}
                <span>{avgtemp_c}℃</span>
            </div>
            <div>
                {t('forecastWeather.Details.maxWindSpeed')}
                <span>
                    {formatWindSpeed(maxwind_mph)} {t('weatherUnits.m/s')}
                </span>
            </div>
            <div>
                {t('forecastWeather.Details.totalPrecipitation')}
                <span>
                    {totalprecip_mm} {t('weatherUnits.mm')}
                </span>
            </div>
            <div>
                {t('forecastWeather.Details.avgVisibility')}
                <span>
                    {avgvis_km} {t('weatherUnits.km')}
                </span>
            </div>
            <div>
                {t('forecastWeather.Details.avgHumidity')}
                <span>{avghumidity} %</span>
            </div>
            <div>
                {avgtemp_c > 0 ? t('forecastWeather.Details.chanceOfRain') : t('forecastWeather.Details.chanceOfSnow')}
                <span>{avgtemp_c > 0 ? daily_chance_of_rain : daily_chance_of_snow} %</span>
            </div>
        </div>
    );
};

export {ForecastDetailsTabContent};
