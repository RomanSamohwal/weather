import React, {useEffect, useState} from 'react';
import {restoreCities, restoreWeathers, saveCities, saveWeathers} from '../utils/localStorage';
import {useDispatch, useSelector} from 'react-redux';
import {addTrackCities} from '../bll/cities-reducer';
import {addWeathers, updateWeatherAll, WeathersType} from '../bll/weather-reducer';
import {WeathersDisplayContainer} from '../features/weathers/WeathersDisplayContainer';
import {Temperatures} from '../features/temperature/Temperatures';
import {AppRootStateType} from '../bll/store';
import {SearchComponent} from '../features/search/SearchComponent';
import {ErrorSnackbar} from '../components/error/ErrorSnackbar';
import SimpleBackdrop from '../common/progress/Loading';
import {Settings} from '../features/update/Settings';
import {UpdateAllComponent} from "../features/update/UpdateAll";

function App() {

    let weathers: WeathersType | any = useSelector<AppRootStateType>(state => state.weathers)
    let cities: Array<number> | any = useSelector<AppRootStateType>(state => state.cities.trackCities)
    let error = useSelector<AppRootStateType>(state => state.app.error)
    let status = useSelector<AppRootStateType>(state => state.app.status)

    const dispatch = useDispatch()
    const [firstLoading, setFirstLoading] = useState(true)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if (firstLoading) {
            dispatch(addTrackCities({cities: restoreCities()}))
            dispatch(addWeathers({weathers: restoreWeathers()}))
            dispatch(updateWeatherAll())
            setFirstLoading(false)
        }
    }, [firstLoading, dispatch])

    useEffect(() => {
        if (!firstLoading) {
            saveCities(cities)
            saveWeathers(weathers)
        }
    }, [cities, weathers])

    if (status === 'loading') {
        return <SimpleBackdrop/>
    }

    const changeFlag = () => {
        setFlag(!flag)
    }

    return <>
        <Temperatures weathers={weathers}/>
        <SearchComponent dispatch={dispatch}/>
        <Settings changeFlag={changeFlag} flag={flag}/>
        <WeathersDisplayContainer cities={cities} weathers={weathers}/>
        <UpdateAllComponent delay = {50}/>
        {error && <ErrorSnackbar/>}
    </>
}

export default App;
