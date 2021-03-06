import {WeatherObj} from "../bll/weather-reducer";

export const formWeatherObj = (params: any, city: string): WeatherObj => {
    return {
        id: params.data.id,
        name: city,
        temp: convertTemp(params.data.main.temp),
        temp_max: convertTemp(params.data.main.temp_max),
        temp_min: convertTemp(params.data.main.temp_min),
        humidity: params.data.main.humidity,
        pressure: convertPressure(params.data.main.pressure),
        icon: params.data.weather[0].icon,
        wind: params.data.wind.speed,
        deg: params.data.wind.deg,
        date: formDate()
    }
}

export const formDate = () => {
    let date = new Date();

    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    // @ts-ignore
    return  date.toLocaleString("ru", options)
}

const convertTemp = (temp: number) => {
    return Math.round(temp - 273)
}

const convertPressure = (press: number) => {
    return Math.round(press * 0.00750063755419211 * 100)
}