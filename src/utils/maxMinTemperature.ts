import {WeathersType, WeatherObj} from '../bll/weather-reducer';

export const MaxMinTemperature = (obj: WeathersType) => {

    let arr = Object.values(obj)
    let max = Math.max.apply(null, arr.map((value: WeatherObj) => {
        return value.temp_max
    }))
    let min = Math.min.apply(null, arr.map((value: WeatherObj) => {
        return value.temp_min
    }))
    return [arr.find((t: WeatherObj) => t.temp_max === max),
            arr.find((t: WeatherObj) => t.temp_min === min)]
}