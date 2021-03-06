import React, {useEffect, useState} from 'react';
import {restoreCities, restoreWeathers, saveCities, saveWeathers} from '../utils/localStorage';
import {useDispatch, useSelector} from "react-redux";
import {addTrackCities} from '../bll/cities-reducer';
import {addWeathers, InitType} from '../bll/weather-reducer';
import {WeathersDisplayContainer} from '../features/weathers/WeathersDisplayContainer';
import {Temperatures} from "../features/temperature/Temperatures";
import {AppRootStateType} from "../bll/store";
import {SearchComponent} from "../features/search/SearchComponent";

function App() {

    let weathers: InitType | any = useSelector<AppRootStateType>(state => state.weathers)
    let cities: Array<number> | any = useSelector<AppRootStateType>(state => state.cities.trackCities)

    const dispatch = useDispatch()
    const [firstLoading, setFirstLoading] = useState(true)

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

    return (
        <div>
            <Temperatures weathers = {weathers}/>
            <SearchComponent/>
            <WeathersDisplayContainer cities = {cities} weathers = {weathers}/>
        </div>
    );
}

export default App;
