import {Input} from 'antd';
import {useAppDispatch} from 'hooks';
import React from 'react';
import {loadCurrentWeather} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import styles from 'Components/SearchPanel/Styles/SearchPanel.module.css';

const {Search} = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSearch = (value: string) => {
        void dispatch(loadCurrentWeather(value));
        void dispatch(loadForecastWeather(value));
    };

    return (
        <div className={styles.searchPanel}>
            <h1 style={{color: 'white'}}>Enter city</h1>
            <Search className={styles.searchInput} placeholder="input city" onSearch={onSearch} enterButton />
        </div>
    );
};
