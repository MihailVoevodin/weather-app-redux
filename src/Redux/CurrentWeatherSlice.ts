import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CurrentWeatherService} from 'api/CurrentWeatherService';

export const loadCurrentWeather = createAsyncThunk(
    'current/getCurrentWeather',
    async (city: string, {rejectWithValue, dispatch}) => {
        const response = await CurrentWeatherService.getCurrentWeather(city)
        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        console.log(response.data)
        dispatch(setInputValue(city))
        dispatch(setCurrentWeather(response.data))
        return
    }
);

type ICurrentWeather = {
    current: any,
    location: any
}

const CurrentWeatherSlice = createSlice({
    name: 'current',
    initialState: {
        inputCityValue: '',
        currentWeather: {} as ICurrentWeather,
    },
    reducers: {
        setInputValue(state, action) {
            state.inputCityValue = action.payload
        },
        setCurrentWeather(state, action) {
            console.log(action)
            state.currentWeather = action.payload
        }
    }
})

export const {setInputValue, setCurrentWeather} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;