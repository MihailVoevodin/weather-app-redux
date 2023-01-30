import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import CurrentWeatherSlice from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import App from './App';

describe('App testing', () => {
    const store = configureStore({
        reducer: {
            current: CurrentWeatherSlice,
            forecast: ForecastWeatherSlice,
        },
    });

    test('renders learn react link', () => {
        const FullApp = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(FullApp).toMatchSnapshot();
    });
});
