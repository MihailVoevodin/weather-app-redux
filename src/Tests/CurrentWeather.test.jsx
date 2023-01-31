import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {CurrentWeather} from '../Components/CurrentWeather/Page/CurrentWeather';
import CurrentWeatherSlice from '../Components/CurrentWeather/Redux/CurrentWeatherSlice';
import ForecastWeatherSlice from '../Components/ForecastWeather/Redux/ForecastWeatherSlice';

describe('Current Weather', () => {
    const store = configureStore({
        reducer: {
            current: CurrentWeatherSlice,
            forecast: ForecastWeatherSlice,
        },
    });

    beforeEach(() => {
        render(
            <Provider store={store}>
                <CurrentWeather />
            </Provider>
        );
    });

    test('CurrentWeather render', () => {
        const currentWeatherComp = render(
            <Provider store={store}>
                <CurrentWeather />
            </Provider>
        );
        expect(currentWeatherComp).toMatchSnapshot();
    });
});
