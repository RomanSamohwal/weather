import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    reducers: {
        addWeathers(state, action: PayloadAction<{ weathers: any }>) {
            return action.payload.weathers
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            if (action.payload?.city !== undefined) {
                // @ts-ignore
                state[action.payload.city].push(action.payload.weather)
            }
        })

        builder.addCase(addCity, (state, action) => {
            if (action.payload.city !== undefined) {
                // @ts-ignore
                state[action.payload.city] = []
            }
        });
    }
})

export const weathersReducer = slice.reducer
export const {addWeathers} = slice.actions