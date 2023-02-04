import {Input} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {loadCurrentWeather, setInputValue} from 'Components/CurrentWeather/Redux/CurrentWeatherSlice';
import {getError, getErrorMessage} from 'Components/CurrentWeather/Redux/selectors';
import {loadForecastWeather} from 'Components/ForecastWeather/Redux/ForecastWeatherSlice';
import styles from 'Components/SearchPanel/Styles/SearchPanel.module.css';

const {Search} = Input;

/**
 * Компонент поиска погоды.
 */
export const SearchPanel: React.FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const error = useAppSelector(getError);
    const errorMessage = useAppSelector(getErrorMessage);

    const [city, setCity] = useState<string>('');

    const onSearch = (city: string) => {
        void dispatch(setInputValue(city));
        void dispatch(loadCurrentWeather(city));
        void dispatch(loadForecastWeather(city));
        setCity('');
    };

    const nonLettersRegExp = new RegExp(/[^a-zа-яё]/i);

    const searchPanelPlaceholder: string = t('searchPanelPlaceholder');

    const handleChangeInputValue = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setCity(target.value.replace(nonLettersRegExp, ''));
    };

    return (
        <div className={styles.searchPanel}>
            <h1 style={{color: 'white'}}>{t('header')}</h1>
            <Search
                className={styles.searchInput}
                value={city}
                placeholder={searchPanelPlaceholder}
                onSearch={onSearch}
                enterButton
                onChange={handleChangeInputValue}
                status={error}
            />
            {errorMessage && <div className={styles.errorMessage}>{t('errorMessage')}</div>}
        </div>
    );
};
