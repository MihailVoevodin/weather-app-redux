import {configureStore} from '@reduxjs/toolkit';
import CurrentWeatherSlice, {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice, {IForecastWeatherState} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';

/**
 * @param current - Ветка текущей погоды.
 * @param forecast - Ветка прогноза погоды.
 */
export interface IAppState {
    current: ICurrentWeatherState;
    forecast: IForecastWeatherState;
}

export const store = configureStore<IAppState>({
    reducer: {
        current: CurrentWeatherSlice,
        forecast: ForecastWeatherSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
