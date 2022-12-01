import styles from 'Components/ForecastWeather/ForecastWeather.module.css';
import React from 'react';
import {IAstroForecast} from 'Redux/ForecastWeatherSlice';

interface IProps {
    astroWeather: IAstroForecast;
}

/**
 * Компонент отображения почасового прогноза погоды.
 */
const ForecastAstroTabContent: React.FC<IProps> = ({astroWeather}): any => {

    return (
        <div className={styles.astroTabContent}>
            <div>Sunrise: {astroWeather.sunrise}</div>
            <div>Sunset:  {astroWeather.sunset}</div>
        </div>
    )
}

export {ForecastAstroTabContent};