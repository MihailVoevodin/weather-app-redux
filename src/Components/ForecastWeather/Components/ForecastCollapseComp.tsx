import React from 'react';
import {Collapse} from 'antd';
import styles from 'Components/ForecastWeather/Styles/ForecastWeather.module.css';
import {ForecastDetailsTabContent} from 'Components/ForecastWeather/Components/ForecastDetailsTabContent';
import {ForecastAstroTabContent} from 'Components/ForecastWeather/Components/ForecastAstroTabContent';
import {ForecastHourlyTabContent} from 'Components/ForecastWeather/Components/ForecastHourlyTabContent';
import {IForecast} from 'Components/ForecastWeather/Models';
import 'Components/ForecastWeather/Styles/Forecast.css';

const { Panel } = Collapse;

interface IProps {
    forecastDay: IForecast;
}

/**
 * Компонент отображения тайтлов табов прогноза погоды.
 */
const ForecastCollapseComp: React.FC<IProps> = ({forecastDay}) => {

    return (
        <Collapse className={styles.collapse} ghost>
            <Panel header="Details" key="1">
                <ForecastDetailsTabContent detailsWeather={forecastDay.day} />
            </Panel>
            <Panel header="Astronomy" key="2">
                <ForecastAstroTabContent astroWeather={forecastDay.astro} />
            </Panel>
            <Panel header="Hourly forecast" key="3">
                <ForecastHourlyTabContent hourWeather={forecastDay.hour} />
            </Panel>
        </Collapse>
    )
}

export {ForecastCollapseComp};
