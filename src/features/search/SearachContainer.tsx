import React, {useEffect} from 'react';
import {SearchComponent} from "./SearchComponent";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {saveCities, saveWeathers} from "../../utils/localStorage";

export const SearchContainer = React.memo(() => {
    let trackCities = useSelector<AppRootStateType>(state => state.cities.trackCities)
    let weathersCities = useSelector<AppRootStateType>(state => state.weathers)

    useEffect(() => {
        saveCities(trackCities)
        saveWeathers(weathersCities)
    }, [trackCities, weathersCities])

    return <SearchComponent/>
})

