import React, {useEffect} from 'react';
import {SearchComponent} from "./SearchComponent";
import {useSelector} from "react-redux";
import {AppRootStateType} from '../../bll/store';
import {saveCities, saveWeathers} from '../../utils/localStorage';

export const SearchContainer = React.memo((props: any) => {

    let trackCities = useSelector<AppRootStateType>(state => state.cities.trackCities)
    let weathersCities = useSelector<AppRootStateType>(state => state.weathers)

    useEffect(() => {
        if (!props.firstLoading) {
            saveCities(trackCities)
            saveWeathers(weathersCities)
        }
    }, [trackCities, weathersCities])

    return <SearchComponent/>
})

