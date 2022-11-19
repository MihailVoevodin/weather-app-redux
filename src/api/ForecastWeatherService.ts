import axios from 'axios';
import {API_KEY} from 'api/Const';

export const ForecastWeatherService = {
    /** Получение прогноза погоды по текущему городу. */
    getForecastWeather(city: string) {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
    },
}