import {configureStore} from '@reduxjs/toolkit';
import CurrentWeatherSlice, {ICurrentWeatherState} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice, {IForecastState} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';

export interface IAppState {
    current: ICurrentWeatherState;
    forecast: IForecastState;
}

export const store = configureStore<IAppState>({
    reducer: {
        current: CurrentWeatherSlice,
        forecast: ForecastWeatherSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
