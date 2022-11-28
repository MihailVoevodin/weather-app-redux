import React from "react";
import {Input} from 'antd';
import {loadCurrentWeather} from 'Redux/CurrentWeatherSlice';
import {useAppDispatch} from 'hooks';
import {loadForecastWeather} from 'Redux/ForecastWeatherSlice';

const { Search } = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSearch = (value: string) => {
        dispatch(loadCurrentWeather(value))
        dispatch(loadForecastWeather(value))
    }

    return (
        <>
            <h1 style={{color: 'white'}}>Enter city</h1>
            <Search style={{width: 400}} placeholder="input city" onSearch={onSearch} enterButton />
        </>
    )
}