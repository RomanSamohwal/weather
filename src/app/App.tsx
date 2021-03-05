import React, {useEffect, useState} from 'react';
import {SearchContainer} from '../features/search/SearachContainer';
import { restoreCities,restoreWeathers } from '../utils/localStorage';
import {useDispatch} from "react-redux";
import { addTrackCities } from '../bll/cities-reducer';
import { addWeathers } from '../bll/weather-reducer';

function App() {

    const dispatch = useDispatch()
    const [firstLoading, setFirstLoading] = useState(true)

    useEffect(() => {
        if (firstLoading) {
            let cities = restoreCities()
            let weathers = restoreWeathers()
            dispatch(addTrackCities({cities}))
            dispatch(addWeathers({weathers}))
            console.log(cities)
            console.log(weathers)
            setFirstLoading(false)
        }
    }, [firstLoading, dispatch])

    return (
        <div>
            <SearchContainer firstLoading = {firstLoading}/>
        </div>
    );
}

export default App;
