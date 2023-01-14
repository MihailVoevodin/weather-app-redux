import {ForecastWeatherService} from 'api/ForecastWeatherService';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {IForecast} from 'Components/ForecastWeather/Models';

export const loadForecastWeather = createAsyncThunk('forecast/getForecastWeather', async (city: string, {rejectWithValue, dispatch}) => {
    const response = await ForecastWeatherService.getForecastWeather(city);
    if (response.status !== 200) {
        return rejectWithValue('Server Error!');
    }
    dispatch(setForecastWeather(response.data.forecast.forecastday));
    return;
});

/**
 * Модель redux-ветки прогноза погоды.
 * @param forecastWeather Массив прогноза погоды.
 */
export interface IForecastState {
    forecastWeather: IForecast[];
}

const initialState: IForecastState = {
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
