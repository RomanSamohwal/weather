import React from 'react';
import {updateWeatherAll} from '../../bll/weather-reducer';

export const UpdateAllComponent = (props: any) => {

    const onclickHandler = () => {
       setTimeout(() => {
         props.dispatch(updateWeatherAll({cities: props.cities, weathers: props.weathers}))
       },1000)
    }

    return <div>
        <button onClick={onclickHandler}>обновить все чере 5с</button>
    </div>
}