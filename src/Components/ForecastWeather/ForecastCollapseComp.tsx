import React from 'react';
import {Collapse} from 'antd';
import {ForecastDetailsTabContent} from 'Components/ForecastWeather/ForecastDetailsTabContent';
import {ForecastAstroTabContent} from 'Components/ForecastWeather/ForecastAstroTabContent';
import {ForecastHourlyTabContent} from 'Components/ForecastWeather/ForecastHourlyTabContent';
import {IForecast} from 'Redux/ForecastWeatherSlice';
const { Panel } = Collapse;

interface IProps {
    forecastDay: IForecast;
}


/**
 * Компонент отображения тайтлов табов прогноза погоды.
 */
const ForecastCollapseComp: React.FC<IProps> = ({forecastDay}) => {

    return (
        <Collapse>
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