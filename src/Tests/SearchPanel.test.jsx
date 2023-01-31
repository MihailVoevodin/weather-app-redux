import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrentWeatherSlice from '../Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice from '../Components/ForecastWeather/Redux/ForecastWeatherSlice';
import {SearchPanel} from '../Components/SearchPanel/SearchPanel';

describe('Search Panel', () => {
    const store = configureStore({
        reducer: {
            current: CurrentWeatherSlice,
            forecast: ForecastWeatherSlice,
        },
    });

    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
    });

    test('SearchPanel renders', () => {
        expect(screen.getByText(/check the weather/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/input city/i)).toBeInTheDocument();
    });

    test('Change input', () => {
        const input = screen.getByPlaceholderText(/input city/i);
        userEvent.type(input, 'Лондон');
        expect(input).toHaveDisplayValue('Лондон');
        fireEvent.click(screen.getByRole('button'));
        expect(input).toHaveDisplayValue('');
    });

    test('SearchPanel snapshot', () => {
        const searchPanelComp = render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
        expect(searchPanelComp).toMatchSnapshot();
    });
});
