import moment from 'moment';
import {ILocation} from 'Components/CurrentWeather/Models';
import {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {IForecastWeatherState} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import {IAppState} from 'Redux/Store';

/** Селектор получения введенного в поиск города. */
export const getInputCityValue = (state: IAppState): ICurrentWeatherState['inputCityValue'] => state.current.inputCityValue;

/** Селектор данных о прогнозе погоды. */
export const getForecastWeather = (state: IAppState): IForecastWeatherState['forecastWeather'] => state.forecast.forecastWeather;

export const getCurrentWeatherTime = (state: IAppState): ILocation['localtime'] | undefined =>
    moment(state.current.currentWeather.location?.localtime).format('HH');
