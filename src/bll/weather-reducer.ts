import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiWeather} from "../api/api-weater";
import {addCity} from "./cities-reducer";

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
    initialState: {} as InitType,
    reducers: {
        addWeathers(state, action: PayloadAction<{ weathers: any }>) {
            return action.payload.weathers
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
    }
})

export const weathersReducer = slice.reducer
export const {addWeathers} = slice.actions

export type InitType = {
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