import React from "react";
import {Input} from 'antd';
import {loadCurrentWeather} from 'Redux/CurrentWeatherSlice';
import {useAppDispatch} from 'hooks';

const { Search } = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSearch = (value: string) => {
        dispatch(loadCurrentWeather(value))
    }

    return (
        <>
            <h1>Enter city</h1>
            <Search style={{width: 400}} placeholder="input search text" onSearch={onSearch} enterButton />
        </>
    )
}