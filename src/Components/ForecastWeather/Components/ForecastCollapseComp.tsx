import {Collapse} from 'antd';
import React from 'react';
import {ForecastAstroTabContent} from 'Components/ForecastWeather/Components/ForecastAstroTabContent';
import {ForecastDetailsTabContent} from 'Components/ForecastWeather/Components/ForecastDetailsTabContent';
import {ForecastHourlyTabContent} from 'Components/ForecastWeather/Components/ForecastHourlyTabContent';
import {IForecast} from 'Components/ForecastWeather/Models';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import 'Components/ForecastWeather/Styles/Forecast.css';

const {Panel} = Collapse;

/**
 * @param forecastDay Прогноз погоды.
 */
interface IProps {
    forecastWeather: IForecast;
}

/**
 * Компонент отображения тайтлов табов прогноза погоды.
 */
const ForecastCollapseComp: React.FC<IProps> = ({forecastWeather}) => {
    const {day, astro, hour} = forecastWeather;

    return (
        <Collapse className={styles.collapse} ghost>
            <Panel header="Details" key="1">
                <ForecastDetailsTabContent detailsForecastWeather={day} />
            </Panel>
            <Panel header="Astronomy" key="2">
                <ForecastAstroTabContent astroForecastWeather={astro} />
            </Panel>
            <Panel header="Hourly forecast" key="3">
                <ForecastHourlyTabContent hourForecastWeather={hour} />
            </Panel>
        </Collapse>
    );
};

export {ForecastCollapseComp};
