import axios from "axios";
import {WeatherObj} from "../bll/weather-reducer";
import {formWeatherObj} from "../utils/formWeatherObj";

const API_KEY = 'f49f252e14653d371d0e45f5c7398f20';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/'
})

export const ApiWeather = {
    getWeatherCheckedCity: async (city: string) : Promise<WeatherObj> => {
        const response = await instance.get<responseWeather>(`data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return formWeatherObj(response, city)
    },
    getUpdatedCheckedCity: async (id: number, city: string) : Promise<WeatherObj> => {
        const response = await instance.get<responseWeather>(`data/2.5/weather?id=${id}&appid=${API_KEY}`);
        return formWeatherObj(response, city)
    }
}

//types
export type responseWeather = {
    data: Data
}

export type Data = {
    base: string
    clouds: { all: number }
    cod: number
    coord: { lat: number, lon: number }
    dt: number
    id: number
    main: Main
    sys: Sys
    name: string
    timezone: number
    visibility: number
    weather: Array<Weather>
    wind: Wind
}

export type Weather = {
    id: number
    main: string
    description: string
    icon: string
}

export type Main = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
}

type Sys = {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
}

type Wind = {
    deg: number
    gust: number
    speed: number
}