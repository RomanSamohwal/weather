import React, {useEffect, useRef, useState} from 'react';
import {restoreCities, restoreWeathers, saveCities, saveWeathers} from '../utils/localStorage';
import {useDispatch, useSelector} from "react-redux";
import {addTrackCities} from '../bll/cities-reducer';
import {addWeathers, updateWeatherAll, WeathersType} from '../bll/weather-reducer';
import {WeathersDisplayContainer} from '../features/weathers/WeathersDisplayContainer';
import {Temperatures} from "../features/temperature/Temperatures";
import {AppRootStateType} from "../bll/store";
import {SearchComponent} from "../features/search/SearchComponent";
import {UpdateAllComponent} from '../features/update/UpdateAll';

export function useInterval(callback: any, delay : any) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


function App() {

    let weathers: WeathersType | any = useSelector<AppRootStateType>(state => state.weathers)
    let cities: Array<number> | any = useSelector<AppRootStateType>(state => state.cities.trackCities)

    const dispatch = useDispatch()
    const [firstLoading, setFirstLoading] = useState(true)

    const onUpdateAllHandler = () => {
        dispatch(updateWeatherAll({cities: cities, weathers: weathers}))
    }

    useEffect(() => {
        if (firstLoading) {
            dispatch(addTrackCities({cities: restoreCities()}))
            dispatch(addWeathers({weathers: restoreWeathers()}))
            setFirstLoading(false)
        }
    }, [firstLoading, dispatch])

    useEffect(() => {
        if (!firstLoading) {
            saveCities(cities)
            saveWeathers(weathers)
        }
    }, [cities, weathers])

    /*useInterval(onUpdateAllHandler,3000)*/

    return <>
            <Temperatures weathers={weathers}/>
            <SearchComponent dispatch={dispatch}/>
            <UpdateAllComponent onClickHandler={onUpdateAllHandler}/>
            <WeathersDisplayContainer cities={cities} weathers={weathers}/>
        </>
}

export default App;
