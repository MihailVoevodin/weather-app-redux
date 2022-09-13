import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CurrentWeatherService} from 'api/CurrentWeatherService';

export const loadCurrentWeather = createAsyncThunk(
    'current/getCurrentWeather',
    async (city: string, {rejectWithValue, dispatch}) => {
        dispatch(toggleIsLoading())
        const response = await CurrentWeatherService.getCurrentWeather(city)
        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        console.log(response.data)
        dispatch(setInputValue(city))
        dispatch(setCurrentWeather(response.data))
        dispatch(toggleIsLoading())
        return
    }
);

export const loadDefaultCurrentWeather = createAsyncThunk(
    'current/getDefaultCurrentWeather',
    async (_, {rejectWithValue, dispatch}) => {
        const response = await CurrentWeatherService.getDefaultCurrentWeather()
        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        console.log(response.data)
        dispatch(setCurrentWeather(response.data))
        dispatch(toggleIsLoading())
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
        isLoading: true
    },
    reducers: {
        setInputValue(state, action) {
            state.inputCityValue = action.payload
        },
        setCurrentWeather(state, action) {
            console.log(action)
            state.currentWeather = action.payload
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading
        }
    }
})

export const {setInputValue, setCurrentWeather, toggleIsLoading} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;