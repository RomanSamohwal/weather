import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCity, fetchSearchCities} from '../../bll/cities-reducer';
import {AppRootStateType} from '../../bll/store';
import {City, MatchingAlterNames} from "../../api/api-city";
import {fetchWeather} from '../../bll/weather-reducer';
import {InputSearch} from '../../components/InputSearch';

export const SearchComponent = () => {

    let searchCities = useSelector<AppRootStateType>(state => state.cities.searchCities)

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [flag, setFlag] = useState(false)

    const onAutocompleteHandler = useCallback((city: MatchingAlterNames) => {
        setValue(city.name)
        setFlag(false)
    }, [value, flag])

    const onSearchHandler = useCallback(() => {
        if (value !== '') {
            dispatch(fetchWeather(value))
            dispatch(addCity({city: value}))
            setValue('')
        }
    }, [value, flag])

    // @ts-ignore
    const citesNewArray = searchCities.map((city: City) => {
        return <div onClick={() => {
            onAutocompleteHandler(city.matching_alternate_names[0])
             }} key={city.matching_full_name}>
            {city.matching_full_name}
        </div>
    })

    const onHandlerSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
        if (e.currentTarget.value.length >= 3) {
            dispatch(fetchSearchCities(e.currentTarget.value))
            setFlag(true)
        } else {
            setFlag(false)
        }
    }, [value, flag])

    return <InputSearch value={value} onHandlerSearch={onHandlerSearch}
                        citesNewArray={citesNewArray} flag={flag}
                        onSearchHandler={onSearchHandler}/>
}
