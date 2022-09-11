import {configureStore} from '@reduxjs/toolkit';
import CurrentWeatherSlice from 'Redux/CurrentWeatherSlice';

export const store = configureStore({
    reducer: {
        current: CurrentWeatherSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
