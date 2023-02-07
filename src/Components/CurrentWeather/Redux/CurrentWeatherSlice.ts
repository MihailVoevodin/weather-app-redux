import {CurrentWeatherService} from 'api/CurrentWeatherService';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {ICurrentWeather} from 'Components/CurrentWeather/Models';

export const loadCurrentWeather = createAsyncThunk<ICurrentWeather, string, {rejectValue: string}>(
    'current/getCurrentWeather',
    async (city, {rejectWithValue}) => {
        const response = await CurrentWeatherService.getCurrentWeather(city);

        if (response.status !== 200) {
            return rejectWithValue('Server Error!');
        }

        return response.data;
    }
);

export const loadDefaultCurrentWeather = createAsyncThunk<ICurrentWeather, void, {rejectValue: string}>(
    'current/getDefaultCurrentWeather',
    async (_, {rejectWithValue}) => {
        const response = await CurrentWeatherService.getDefaultCurrentWeather();

        if (response.status !== 200) {
            return rejectWithValue('Server Error!');
        }

        return response.data;
    }
);

/**
 * Интерфейс redux-ветки текущей погоды.
 * @param inputCityValue Значение инпута поиска.
 * @param currentWeather Текущая погода.
 * @param isLoading Статус загрузки.
 * @param error Статус ошибки.
 * @param errorMessage Сообщение об ошибке.
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
    isLoading: false,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadDefaultCurrentWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadDefaultCurrentWeather.rejected, (state) => {
                state.error = 'error';
                state.errorMessage = 'No matching location found';
                state.isLoading = false;
            })
            .addCase(loadDefaultCurrentWeather.fulfilled, (state, action) => {
                state.currentWeather = action.payload;
                state.isLoading = false;
            })
            .addCase(loadCurrentWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadCurrentWeather.rejected, (state) => {
                state.error = 'error';
                state.errorMessage = 'No matching location found';
                state.isLoading = false;
            })
            .addCase(loadCurrentWeather.fulfilled, (state, action) => {
                state.currentWeather = action.payload;
                state.isLoading = !state.isLoading;
                state.error = '';
                state.errorMessage = '';
            });
    },
});

export const {setInputValue} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;
