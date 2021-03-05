import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiCity} from '../api/api-city';

export const fetchSearchCities = createAsyncThunk(
    'cites/fetchCities',
    async (city: string, thunkAPI) => {
        try {
            return await ApiCity.getCity(city)
        } catch (e) {

        }
    });

const slice = createSlice({
        name: 'cites',
        initialState: {
            trackCities: [] as trackCitiesType,
            searchCities: []
        },
        reducers: {
            addCity(state, action: PayloadAction<{ city: string }>) {
                let findCity = state.trackCities.find(e => e === action.payload.city)
                if (!findCity) {
                    state.trackCities.push(action.payload.city)
                }
            },
            addTrackCities(state, action: PayloadAction<{ cities: trackCitiesType }>) {
                state.trackCities = action.payload.cities
            }
        },
        extraReducers: builder => {
            builder.addCase(fetchSearchCities.fulfilled, (state, action) => {
                    // @ts-ignore
                    state.searchCities = action.payload
            })
        }
    }
)

export const citiesReducer = slice.reducer
export const {addCity,addTrackCities} = slice.actions


type trackCitiesType = Array<string>