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

    test('SearchPanel renders', () => {
        render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
        expect(screen.getByText(/check the weather/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/input city/i)).toBeInTheDocument();
    });

    test('Change input', () => {
        render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/input city/i);
        userEvent.type(input, 'Лондон');
        expect(input).toContainHTML('Лондон');
    });

    test('onSearch click', () => {
        render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
        fireEvent.click(screen.getByRole('button'));
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
