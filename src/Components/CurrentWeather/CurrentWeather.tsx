import React from 'react';

import {useAppSelector} from 'hooks';

export const CurrentWeather: React.FC = () => {
    const {current, location} = useAppSelector(state => state.current.currentWeather)

    return (
        <div style={{backgroundColor: 'black'}}>
            <span>{location.name}</span>
            <img src={current.condition.icon}/>
        </div>
    )
}
