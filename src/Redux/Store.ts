import {configureStore} from '@reduxjs/toolkit';
import CurrentWeatherSlice from 'Redux/CurrentWeatherSlice';
import ForecastWeatherSlice from 'Redux/ForecastWeatherSlice';

export const store = configureStore({
    reducer: {
        current: CurrentWeatherSlice,
        forecast: ForecastWeatherSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
