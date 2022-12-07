import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import React from 'react';
import {IAstroForecast} from 'Components/ForecastWeather/Models';

interface IProps {
    astroWeather: IAstroForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastAstroTabContent: React.FC<IProps> = ({astroWeather}): any => {

    return (
        <div className={styles.astroTabContent}  style={{color: 'white'}}>
            <div>Sunrise<span>{astroWeather.sunrise}</span></div>
            <div>Sunset<span>{astroWeather.sunset}</span></div>
        </div>
    )
}

export {ForecastAstroTabContent};