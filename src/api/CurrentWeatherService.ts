import axios from 'axios';
import {API_KEY} from 'api/Const';


export const CurrentWeatherService = {
    getCurrentWeather(city: string) {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    },
    getDefaultCurrentWeather() {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Moscow&aqi=no`)
    }
}