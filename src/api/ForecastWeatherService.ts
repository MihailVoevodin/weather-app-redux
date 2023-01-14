import {API_KEY} from 'api/Const';
import axios from 'axios';

export const ForecastWeatherService = {
    /** Получение прогноза погоды по текущему городу. */
    async getForecastWeather(city: string) {
        return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);
    },
};
