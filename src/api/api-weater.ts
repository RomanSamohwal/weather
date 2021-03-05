import axios from "axios";

const API_KEY = 'f49f252e14653d371d0e45f5c7398f20';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const ApiWeather = {
    getWeatherCheckedCity: async (city: string) => {
        const response = await instance.get(`weather?q=${city}&appid=${API_KEY}`);
        console.log(response)
        return response.data
    }
}
