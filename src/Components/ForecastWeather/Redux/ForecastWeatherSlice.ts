import {ForecastWeatherService} from 'api/ForecastWeatherService';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {IForecast} from 'Components/ForecastWeather/Models';

export const loadForecastWeather = createAsyncThunk('forecast/getForecastWeather', async (city: string, {rejectWithValue, dispatch}) => {
    try {
        const response = await ForecastWeatherService.getForecastWeather(city);
        dispatch(setForecastWeather(response.data.forecast.forecastday));
    } catch (error) {
        return rejectWithValue('error');
    }
    return;
});

/**
 * Модель redux-ветки прогноза погоды.
 * @param forecastWeather Массив прогноза погоды.
 */
export interface IForecastWeatherState {
    forecastWeather: IForecast[];
}

const initialState: IForecastWeatherState = {
    forecastWeather: [],
};

/**
 * Срез прогноза погоды.
 */
const ForecastWeatherSlice = createSlice({
    name: 'forecast',
    initialState: initialState,
    reducers: {
        setForecastWeather(state, action) {
            state.forecastWeather = action.payload;
        },
    },
});

export const {setForecastWeather} = ForecastWeatherSlice.actions;

export default ForecastWeatherSlice.reducer;
