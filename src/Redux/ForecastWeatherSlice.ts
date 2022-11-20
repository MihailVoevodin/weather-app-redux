import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ForecastWeatherService} from 'api/ForecastWeatherService';

export const loadForecastWeather = createAsyncThunk(
    'current/getDefaultCurrentWeather',
    async (city: string, {rejectWithValue, dispatch}) => {
        const response = await ForecastWeatherService.getForecastWeather(city)
        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        console.log(response.data.forecast.forecastday)
        dispatch(setForecastWeather(response.data.forecast.forecastday))
        return;
    }
);

/**
 * Срез прогноза погоды.
 */
const ForecastWeatherSlice = createSlice({
    name: 'forecast',
    initialState: {
        forecastWeather: [],
    },
    reducers: {
        setForecastWeather(state, action) {
            console.log(action)
            state.forecastWeather = action.payload
        },
    }
})

export const {setForecastWeather} = ForecastWeatherSlice.actions;

export default ForecastWeatherSlice.reducer;