import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiWeather} from "../api/api-weater";
import {addCity} from "./cities-reducer";

export const updateWeatherAll = createAsyncThunk(
    'weathers/updateWeatherAll',
    async (param: {cities: Array<number>, weathers: WeathersType}  ,thunkAPI) => {
        try {
            const weather = await ApiWeather.updateCheckedWeatherCityAll(param.cities, param.weathers)
            /*return {weather}*/
        } catch (e) {

        }
    });

export const updateWeather = createAsyncThunk(
    'weathers/updateWeather',
    async ( param:{id: number, city: string},thunkAPI) => {
        try {
            const weather = await ApiWeather.getUpdatedWeatherCheckedCity(param.id, param.city)
            return {weather}
        } catch (e) {

        }
    });

export const fetchWeather = createAsyncThunk(
    'weathers/fetchWeather',
    async (city: string, thunkAPI) => {
        try {
            const weather = await ApiWeather.getWeatherCheckedCity(city)
            thunkAPI.dispatch(addCity({cityId: weather.id}))
            console.log(weather)
            return {weather}
        } catch (e) {

        }
    });

const slice = createSlice({
    name: 'weathers',
    initialState: {} as WeathersType,
    reducers: {
        addWeathers(state, action: PayloadAction<{ weathers: any }>) {
            return action.payload.weathers
        },
        deleteCityWeather(state, action: PayloadAction<{ id: number }>) {
            debugger
            delete state[action.payload.id]
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            /*if (action.payload?.weather.cityId !== undefined) {*/
                // @ts-ignore
                state[action.payload.weather.id] = action.payload.weather
           /* }*/
        })

        builder.addCase(addCity, (state, action) => {
            if (action.payload.cityId !== undefined) {
                // @ts-ignore
                state[action.payload.cityId] = {}
            }
        });

        builder.addCase(updateWeather.fulfilled, (state, action) => {
           /* if (action.payload.cityId !== undefined) {*/
                // @ts-ignore
                state[action.payload.weather.id] = action.payload.weather
            /*}*/
        });
    }
})

export const weathersReducer = slice.reducer
export const {addWeathers, deleteCityWeather} = slice.actions

export type WeathersType = {
  [key: string]: WeatherObj
}

export type WeatherObj = {
    id: number
    name: string
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
    wind: number
    deg: number
    pressure: number
    date: string
    icon: string
}