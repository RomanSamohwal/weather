import React from 'react';
import {updateWeatherAll} from '../../bll/weather-reducer';
import {useInterval} from './useInterval';
import {useDispatch} from 'react-redux';

export const UpdateAllComponent = (props: any) => {

    const dispatch = useDispatch()
    const onUpdateAllHandler = () => {
        dispatch(updateWeatherAll())
    }
    useInterval(onUpdateAllHandler, props.delay)

    return <></>
}


