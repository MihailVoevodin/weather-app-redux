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

export interface IForecastState {
    forecastWeather: IForecast[];
}

const initialState: IForecastState = {
    forecastWeather: [],
};

export interface IForecast {
    date: string;
    day: IForecastWeatherDay;
    hour: IHourForecast[];
}

interface IForecastWeatherDay {
    maxtemp_c: number;
    mintemp_c: number;
    condition: IForecastWeatherDayCondition;
}

interface IForecastWeatherDayCondition {
    text: string;
    icon: string;
}

export interface IHourForecast {
    time: string;
    temp_c: number;
}

/**
 * Срез прогноза погоды.
 */
const ForecastWeatherSlice = createSlice({
    name: 'forecast',
    initialState: initialState,
    reducers: {
        setForecastWeather(state, action) {
            state.forecastWeather = action.payload
        },
    }
})

export const {setForecastWeather} = ForecastWeatherSlice.actions;

export default ForecastWeatherSlice.reducer;