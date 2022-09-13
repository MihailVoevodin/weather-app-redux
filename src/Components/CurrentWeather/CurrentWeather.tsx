import Spinner from 'Common/Components/Spinner';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks';
import {loadDefaultCurrentWeather} from 'Redux/CurrentWeatherSlice';

export const CurrentWeather: React.FC = () => {
    const dispatch = useAppDispatch();
    const {current, location} = useAppSelector(state => state.current.currentWeather)
    const isLoading = useAppSelector(state => state.current.isLoading)

    useEffect(() => {
        dispatch(loadDefaultCurrentWeather())
    }, [dispatch])

    return (
        <>
        {isLoading
            ? <Spinner/>
            : <div>
            <span>{location.name}</span>
            <img src={current.condition.icon} alt='icon'/>
            </div>
        }
        </>
    )
}
