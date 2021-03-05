import React, {ChangeEvent, useState} from 'react';
import style from './Search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addCity, fetchSearchCities} from "../../bll/cities-reducer";
import {AppRootStateType} from '../../bll/store';
import {City, MatchingAlterNames} from "../../api/api-city";
import {fetchWeather} from "../../bll/weather-reducer";

export const SearchComponent = () => {
    let searchCities = useSelector<AppRootStateType>(state => state.cities.searchCities)
    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [flag, setFlag] = useState(false)

    const onClickHandler = (city: MatchingAlterNames) => {
        dispatch(fetchWeather(city.name))
        dispatch(addCity({city: city.name}))
        setValue('')
        setFlag(false)
    }

    // @ts-ignore
    const citesNewArray = searchCities.map((city: City) => {
        return <div onClick={() => {
            onClickHandler(city.matching_alternate_names[0])
        }}
                    key={city.matching_full_name}>
            {city.matching_full_name}
        </div>
    })

    const onHandlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
        if (e.currentTarget.value.length >= 3) {
            dispatch(fetchSearchCities(e.currentTarget.value))
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    return <div className={style.container}>
        <input type='text' placeholder={'Search city'} onChange={onHandlerSearch} value={value}/>
        <div className={style.suggestion}>
            {flag ? citesNewArray : null}
        </div>
    </div>
}
