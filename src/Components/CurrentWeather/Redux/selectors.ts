import {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {IAppState} from 'Redux/Store';

export const getCurrentWeather = (state: IAppState): ICurrentWeatherState['currentWeather'] => state.current.currentWeather;

export const getError = (state: IAppState): ICurrentWeatherState['error'] => state.current.error;

export const getErrorMessage = (state: IAppState): ICurrentWeatherState['errorMessage'] => state.current.errorMessage;

export const getIsLoading = (state: IAppState): ICurrentWeatherState['isLoading'] => state.current.isLoading;
