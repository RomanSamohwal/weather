import React, {useCallback, useEffect, useState} from 'react';
import {restoreCities, restoreWeathers, saveCities, saveWeathers} from '../utils/localStorage';
import {useDispatch, useSelector} from "react-redux";
import {addTrackCities} from '../bll/cities-reducer';
import {addWeathers, updateWeatherAll, WeathersType} from '../bll/weather-reducer';
import {WeathersDisplayContainer} from '../features/weathers/WeathersDisplayContainer';
import {Temperatures} from "../features/temperature/Temperatures";
import {AppRootStateType} from "../bll/store";
import {SearchComponent} from "../features/search/SearchComponent";
import { UpdateAllComponent } from '../features/update/UpdateAll';
import {Card} from "@material-ui/core";
import RecipeReviewCard from '../components/card/Cards';

function App() {

    let weathers: WeathersType | any = useSelector<AppRootStateType>(state => state.weathers)
    let cities: Array<number> | any = useSelector<AppRootStateType>(state => state.cities.trackCities)

    const dispatch = useDispatch()
    const [firstLoading, setFirstLoading] = useState(true)

    const onUpdateAllHandler = useCallback(() => {
        dispatch(updateWeatherAll({cities: cities, weathers: weathers}))
    }, [cities, weathers])

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

  /*  useEffect(() => {
        setInterval(() => {
            onUpdateAllHandler()
        }, 3000)
    }, [])*/

    return (
        <div>
            <RecipeReviewCard/>
            {/* <Temperatures weathers={weathers}/>
            <SearchComponent dispatch = {dispatch}/>
            <UpdateAllComponent onClickHandler={onUpdateAllHandler}/>
            <WeathersDisplayContainer cities={cities} weathers={weathers}/>*/}
        </div>
    );
}

export default App;
