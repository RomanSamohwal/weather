import React, {ChangeEvent, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {fetchSearchCities} from '../../bll/cities-reducer';
import {AppRootStateType} from '../../bll/store';
import {City, MatchingAlterNames} from "../../api/api-city";
import {fetchWeather} from '../../bll/weather-reducer';
import {InputSearch} from "../../components/InputSearch";

export const SearchComponent = (props: any) => {

    let searchCities : any = useSelector<AppRootStateType>(state => state.cities.searchCities)

    const [value, setValue] = useState('')
    const [flag, setFlag] = useState(false)

    const onAutocompleteHandler = useCallback((city: MatchingAlterNames) => {
        setValue(city.name)
        setFlag(false)
    }, [value, flag])

    const onSearchHandler = useCallback(() => {
        if (value !== '') {
            props.dispatch(fetchWeather(value))
            setValue('')
        }
    }, [value, flag])

    const citesNewArray = searchCities.map((city: City) => <div
            onClick={() => {onAutocompleteHandler(city.matching_alternate_names[0])}}
            key={city.matching_full_name}>
            {city.matching_full_name}
    </div>
    )

    const onHandlerSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
        if (e.currentTarget.value.length >= 3) {
             props.dispatch(fetchSearchCities(e.currentTarget.value))
            setFlag(true)
        } else {
            setFlag(false)
        }
    }, [value, flag])

    return <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <div>
            <InputSearch value={value} onHandlerSearch={onHandlerSearch}
                         citesNewArray={citesNewArray} flag={flag}
                         onSearchHandler={onSearchHandler}/>
        </div>
    </div>
}
