import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CurrentWeatherService} from 'api/CurrentWeatherService';
import {ICurrentWeather} from 'Components/CurrentWeather/Models';

export const loadCurrentWeather = createAsyncThunk(
    'current/getCurrentWeather',
    async (city: string, {rejectWithValue, dispatch}) => {
        dispatch(toggleIsLoading())
        const response = await CurrentWeatherService.getCurrentWeather(city);
        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        };
        dispatch(setInputValue(city));
        dispatch(setCurrentWeather(response.data));
        dispatch(toggleIsLoading());
        return;
    }
);

export const loadDefaultCurrentWeather = createAsyncThunk(
    'current/getDefaultCurrentWeather',
    async (_, {rejectWithValue, dispatch}) => {
        const response = await CurrentWeatherService.getDefaultCurrentWeather();
        if (response.status !== 200) {
            return rejectWithValue('Server Error!');
        };
        dispatch(setCurrentWeather(response.data));
        dispatch(toggleIsLoading());
        return;
    }
);

export interface ICurrentWeatherState {
    inputCityValue: string,
    currentWeather: Partial<ICurrentWeather>,
    isLoading: boolean,
}

const initialState: ICurrentWeatherState = {
    inputCityValue: 'Москва',
    currentWeather: {},
    isLoading: true,
};

/**
 * Срез текущей погоды.
 */
const CurrentWeatherSlice = createSlice({
    name: 'current',
    initialState: initialState,
    reducers: {
        setInputValue(state, action) {
            state.inputCityValue = action.payload;
        },
        setCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading;
        },
    },
})

export const {setInputValue, setCurrentWeather, toggleIsLoading} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;
