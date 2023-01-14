import moment from 'moment';
import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {IHourForecast} from 'Components/ForecastWeather/Models';

/**
 * @param hourWeather Почасовой прогноз погоды.
 */
interface IProps {
    hourWeather: IHourForecast[];
}

const ForecastHourlyWeatherGraph: React.FC<IProps> = ({hourWeather}) => {
    const formatHourWeather = hourWeather.map((hour) => {
        return {
            time: moment(hour.time).format('HH:mm'),
            temp: hour.temp_c,
        };
    });

    return (
        <ResponsiveContainer minWidth={300} minHeight={200}>
            <AreaChart
                data={formatHourWeather}
                margin={{
                    top: 20,
                    right: 0,
                    left: -28,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="time" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Area type="monotone" dataKey="temp" stroke="#1890ff" fill="#1890ff" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export {ForecastHourlyWeatherGraph};
