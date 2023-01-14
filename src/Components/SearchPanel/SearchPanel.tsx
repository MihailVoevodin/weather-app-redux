import {Input} from 'antd';
import {useAppDispatch} from 'hooks';
import React from 'react';
import {loadCurrentWeather} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';

const {Search} = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSearch = (value: string) => {
        dispatch(loadCurrentWeather(value));
        dispatch(loadForecastWeather(value));
    };

    return (
        <>
            <h1 style={{color: 'white'}}>Enter city</h1>
            <Search style={{width: 400}} placeholder="input city" onSearch={onSearch} enterButton />
        </>
    );
};
