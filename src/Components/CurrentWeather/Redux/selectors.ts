import {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {IAppState} from 'Redux/Store';

export const getCurrentWeather = (state: IAppState): ICurrentWeatherState['currentWeather'] => state.current.currentWeather;

export const getIsLoading = (state: IAppState): ICurrentWeatherState['isLoading'] => state.current.isLoading;
