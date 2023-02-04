import {API_KEY} from 'api/Const';
import axios, {AxiosResponse} from 'axios';
import {ICurrentWeather} from 'Components/CurrentWeather/Models';

export const CurrentWeatherService = {
    /** Получение текущей погоды после поиска. */
    getCurrentWeather(city: string): Promise<AxiosResponse<ICurrentWeather>> {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    },
    /** Получение дефолтной текущей погоды. */
    getDefaultCurrentWeather(): Promise<AxiosResponse<ICurrentWeather>> {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Moscow&aqi=no`);
    },
};
