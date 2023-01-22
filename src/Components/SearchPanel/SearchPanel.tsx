import {Input} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {useState} from 'react';
import {loadCurrentWeather} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import styles from 'Components/SearchPanel/Styles/SearchPanel.module.css';

const {Search} = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();
    const {error, errorMessage} = useAppSelector((state) => state.current);

    const [city, setCity] = useState<string>('');

    const onSearch = (value: string) => {
        void dispatch(loadCurrentWeather(value));
        void dispatch(loadForecastWeather(value));
    };

    const nonLettersRegExp = new RegExp(/[^a-zа-яё]/i);

    const handleChangeInputValue = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setCity(target.value.replace(nonLettersRegExp, ''));
    };

    return (
        <div className={styles.searchPanel}>
            <h1 style={{color: 'white'}}>Check the Weather</h1>
            <Search
                className={styles.searchInput}
                value={city}
                placeholder="input city"
                onSearch={onSearch}
                enterButton
                onChange={handleChangeInputValue}
                status={error}
            />
            <div className={styles.errorMessage}>{errorMessage}</div>
        </div>
    );
};
