import {CurrentWeatherService} from 'api/CurrentWeatherService';
import {AxiosResponse} from 'axios';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {ICurrentWeather} from 'Components/CurrentWeather/Models';

export const loadCurrentWeather = createAsyncThunk('current/getCurrentWeather', async (city: string, {rejectWithValue, dispatch}) => {
    dispatch(toggleIsLoading());
    try {
        const response: AxiosResponse = await CurrentWeatherService.getCurrentWeather(city);
        const data: ICurrentWeather = response.data;

        dispatch(setInputValue(city));
        dispatch(setCurrentWeather(data));
        dispatch(deleteError());
        dispatch(toggleIsLoading());
    } catch (error) {
        dispatch(setError(rejectWithValue('error')));
        dispatch(toggleIsLoading());
    }
    return;
});

export const loadDefaultCurrentWeather = createAsyncThunk('current/getDefaultCurrentWeather', async (_, {rejectWithValue, dispatch}) => {
    try {
        const response: AxiosResponse = await CurrentWeatherService.getDefaultCurrentWeather();
        const data: ICurrentWeather = response.data;
        dispatch(setCurrentWeather(data));
        dispatch(toggleIsLoading());
    } catch (error) {
        return rejectWithValue('error');
    }
    return;
});

/**
 * Модель redux-ветки текущей погоды.
 * @param inputCityValue Значение инпута поиска.
 * @param currentWeather Текущая погода.
 * @param isLoading Статус загрузки.
 */
export interface ICurrentWeatherState {
    inputCityValue: string;
    currentWeather: Partial<ICurrentWeather>;
    isLoading: boolean;
    error: '' | 'error' | 'warning' | undefined;
    errorMessage: string;
}

const initialState: ICurrentWeatherState = {
    inputCityValue: 'Москва',
    currentWeather: {},
    isLoading: true,
    error: '',
    errorMessage: '',
};

/**
 * Срез текущей погоды.
 */
const CurrentWeatherSlice = createSlice({
    name: 'current',
    initialState: initialState,
    reducers: {
        setInputValue(state, action: PayloadAction<string>) {
            state.inputCityValue = action.payload;
        },
        setCurrentWeather(state, action: PayloadAction<ICurrentWeather>) {
            state.currentWeather = action.payload;
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading;
        },
        setError(state, action) {
            state.error = action.payload.payload;
            state.errorMessage = 'No matching location found';
        },
        deleteError(state) {
            state.error = '';
            state.errorMessage = '';
        },
    },
});

export const {setInputValue, setCurrentWeather, toggleIsLoading, setError, deleteError} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;
