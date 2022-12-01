import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ForecastWeatherService} from 'api/ForecastWeatherService';

export const loadForecastWeather = createAsyncThunk(
    'forecast/getForecastWeather',
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
    astro: IAstroForecast;
}

export interface IAstroForecast {
    sunrise: string;
    sunset: string;
}

export interface IDetailsForecast {
    avgtemp_c: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number;
}

interface IForecastWeatherDay {
    avgtemp_c: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number;
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