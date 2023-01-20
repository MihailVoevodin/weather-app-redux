import React from 'react';
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
    const {sunrise, sunset} = astroForecastWeather;

    return (
        <div className={styles.astroTabContent} style={{color: 'white'}}>
            <div>
                Sunrise<span>{sunrise}</span>
            </div>
            <div>
                Sunset<span>{sunset}</span>
            </div>
        </div>
    );
};

export {ForecastAstroTabContent};
