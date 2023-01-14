import React from 'react';
import {IAstroForecast} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';

/**
 * @param astroWeather Астрология прогноза погоды.
 */
interface IProps {
    astroWeather: IAstroForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastAstroTabContent: React.FC<IProps> = ({astroWeather}) => {
    return (
        <div className={styles.astroTabContent} style={{color: 'white'}}>
            <div>
                Sunrise<span>{astroWeather.sunrise}</span>
            </div>
            <div>
                Sunset<span>{astroWeather.sunset}</span>
            </div>
        </div>
    );
};

export {ForecastAstroTabContent};
