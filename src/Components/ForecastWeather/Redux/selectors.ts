import {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {IForecastWeatherState} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import {IAppState} from 'Redux/Store';

export const getInputCityValue = (state: IAppState): ICurrentWeatherState['inputCityValue'] => state.current.inputCityValue;

export const getForecastWeather = (state: IAppState): IForecastWeatherState['forecastWeather'] => state.forecast.forecastWeather;
