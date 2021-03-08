import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';
import { citiesReducer } from './cities-reducer';
import {weathersReducer} from './weather-reducer';


const rootReducer = combineReducers(
    {
        app: appReducer,
        weathers: weathersReducer,
        cities: citiesReducer
    }
)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>