import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiWeather} from '../api/api-weater';
import {addCity} from './cities-reducer';
import {formWeatherObj} from '../utils/formWeatherObj';
import {setAppError, setAppStatus} from './app-reducer';

export const updateWeatherAll = createAsyncThunk(
    'weathers/updateWeatherAll',
    async (param  ,thunkAPI) => {
        try {
            const state = thunkAPI.getState()
            thunkAPI.dispatch(setAppStatus({status: 'loading'}))
            // @ts-ignore
            const response = await ApiWeather.updateCheckedWeatherCityAll(state['cities'].trackCities)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            // @ts-ignore
            const weathers =  response.map(w => formWeatherObj(w, state['weathers'][w.data.id].name)).
            reduce((ac: WeathersType, w) => {
                ac[w.id] = w
                return ac }, {})
            return {weathers}
        } catch (e) {
            thunkAPI.dispatch(setAppStatus({status: 'failed'}))
            thunkAPI.dispatch(setAppError({error: String(e)}))
            return thunkAPI.rejectWithValue(null)
        }
    });

export const updateWeather = createAsyncThunk(
    'weathers/updateWeather',
    async ( param:{id: number, city: string}, thunkAPI) => {
        try {
            thunkAPI.dispatch(setAppStatus({status: 'loading'}))
            const response = await ApiWeather.getUpdatedWeatherCheckedCity(param.id)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            const weather = formWeatherObj(response, param.city)
            return {weather}
        } catch (e) {
            thunkAPI.dispatch(setAppStatus({status: 'failed'}))
            thunkAPI.dispatch(setAppError({error: String(e)}))
            return thunkAPI.rejectWithValue(null)
        }
    });

export const fetchWeather = createAsyncThunk(
    'weathers/fetchWeather',
    async (city: string, thunkAPI) => {
        try {
            thunkAPI.dispatch(setAppStatus({status: 'loading'}))
            const response = await ApiWeather.getWeatherCheckedCity(city)
            let  weather = formWeatherObj(response, city)
            thunkAPI.dispatch(addCity({cityId: weather.id}))
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {weather}
        } catch (e) {
            thunkAPI.dispatch(setAppStatus({status: 'failed'}))
            thunkAPI.dispatch(setAppError({error: String(e)}))
            return thunkAPI.rejectWithValue(null)
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
            delete state[action.payload.id]
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            // @ts-ignore
            if(action.payload.weather !== undefined) {
                    // @ts-ignore
                    state[action.payload.weather.id] = action.payload.weather
                }
        })

        builder.addCase(addCity, (state, action) => {
            if (action.payload.cityId !== undefined) {
                // @ts-ignore
                state[action.payload.cityId] = {}
            }
        });

        builder.addCase(updateWeather.fulfilled, (state, action) => {
                // @ts-ignore
                state[action.payload.weather.id] = action.payload.weather
        });

        builder.addCase(updateWeatherAll.fulfilled, (state, action) => {
            // @ts-ignore
            return action.payload.weathers
        });
    }
})

export const weathersReducer = slice.reducer
export const {addWeathers, deleteCityWeather} = slice.actions

export type WeathersType = {
  [key: string]: WeatherObj
}

//types
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