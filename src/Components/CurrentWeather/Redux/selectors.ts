import {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {IAppState} from 'Redux/Store';

/** Селектор данных текущей погоды. */
export const getCurrentWeather = (state: IAppState): ICurrentWeatherState['currentWeather'] => state.current.currentWeather;

/** Селектор получения статуса ошибки. */
export const getError = (state: IAppState): ICurrentWeatherState['error'] => state.current.error;

/** Селектор получения сообщения об ошибке. */
export const getErrorMessage = (state: IAppState): ICurrentWeatherState['errorMessage'] => state.current.errorMessage;

/** Селектор получения статуса загрузки. */
export const getIsLoading = (state: IAppState): ICurrentWeatherState['isLoading'] => state.current.isLoading;
