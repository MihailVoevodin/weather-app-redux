import Spinner from 'Common/Components/Spinner';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadDefaultCurrentWeather} from 'Redux/CurrentWeatherSlice';
import 'Components/CurrentWeather/CurrentWeather.css';

/**
 * Компонент отображения текущей погоды.
 */
export const CurrentWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {current, location} = useAppSelector(state => state.current.currentWeather)
    const isLoading = useAppSelector(state => state.current.isLoading)

    // if (!isLoading) {
    //     const currentDate = new Date(location.localtime_epoch);
    //     const newCurrentDate = currentDate.toDateString();
    // };


    useEffect(() => {
        dispatch(loadDefaultCurrentWeather())
    }, [dispatch])

    return (
        <>
        {isLoading
            ? <Spinner/>
            : <div>
                <div>{location.localtime}</div>
                <span className='nameCountry'>{location.name}, {location.country}</span>
                <div>
                    <img src={current.condition.icon} alt='condition icon'/>
                    <span>{current.condition.text.toLowerCase()}</span>
                </div>
                <div>
                    {current.temp_c}
                    <span>
                        {current.feelslike_c}
                    </span>
                </div>
            </div>
        }
        </>
    )
}
