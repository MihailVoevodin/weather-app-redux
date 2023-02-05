import {Collapse} from 'antd';
import React from 'react';
import {ForecastAstroTabContent} from 'Components/ForecastWeather/Components/ForecastAstroTabContent';
import {ForecastDetailsTabContent} from 'Components/ForecastWeather/Components/ForecastDetailsTabContent';
import {ForecastHourlyTabContent} from 'Components/ForecastWeather/Components/ForecastHourlyTabContent';
import {IForecast} from 'Components/ForecastWeather/Models';
import 'Components/ForecastWeather/Styles/Forecast.css';
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation();
    const {day, astro, hour} = forecastWeather;

    return (
        <Collapse ghost>
            <Panel header={t('forecastWeather.details')} key="1">
                <ForecastDetailsTabContent detailsForecastWeather={day} />
            </Panel>
            <Panel header={t('forecastWeather.astronomy')} key="2">
                <ForecastAstroTabContent astroForecastWeather={astro} />
            </Panel>
            <Panel header={t('forecastWeather.hourlyForecast')} key="3">
                <ForecastHourlyTabContent hourForecastWeather={hour} />
            </Panel>
        </Collapse>
    );
};

export {ForecastCollapseComp};
