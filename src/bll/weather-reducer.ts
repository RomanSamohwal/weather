import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ApiWeather} from "../api/api-weater";

export const fetchWeather = createAsyncThunk(
    'weathers/fetchWeather',
    async (city: string, thunkAPI) => {
        try {
            const weather = await ApiWeather.getWeatherCheckedCity(city)
            console.log(weather)
            return {weather}
        } catch (e) {

        }
    });

const slice = createSlice({
    name: 'weathers',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            if (action.payload !== undefined) {
                // @ts-ignore
                state.push(action.payload.weather)
            }
        })
    }
})

export const weathersReducer = slice.reducer
export const {} = slice.actions