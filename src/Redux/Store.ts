import {configureStore} from '@reduxjs/toolkit';
import CurrentWeatherSlice from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';

export const store = configureStore({
    reducer: {
        current: CurrentWeatherSlice,
        forecast: ForecastWeatherSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
