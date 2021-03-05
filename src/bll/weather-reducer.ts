import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ApiWeather} from "../api/api-weater";
import {addCity} from "./cities-reducer";

export const fetchWeather = createAsyncThunk(
    'weathers/fetchWeather',
    async (city: string, thunkAPI) => {
        try {
            const weather = await ApiWeather.getWeatherCheckedCity(city)
            return {city, weather}
        } catch (e) {

        }
    });

const slice = createSlice({
    name: 'weathers',
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            // @ts-ignore
            state[action.payload.city].push(action.payload.weather)
        })

        builder.addCase(addCity, (state, action) => {
            // @ts-ignore
            state[action.payload.city] = []
        });
    }
})

export const weathersReducer = slice.reducer
export const {} = slice.actions