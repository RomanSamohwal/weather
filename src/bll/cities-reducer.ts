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
            addCity(state, action: PayloadAction<{ cityId: number }>) {
                let findCity = state.trackCities.find(e => e === action.payload.cityId)
                if (!findCity) {
                    state.trackCities.unshift(action.payload.cityId)
                }
            },
            addTrackCities(state, action: PayloadAction<{ cities: trackCitiesType }>) {
                state.trackCities = action.payload.cities
            },
            // @ts-ignore
            deleteCity(state, action: PayloadAction<{ id: number }>) {
                let index = state.trackCities.findIndex( i => i === action.payload.id)
                state.trackCities.splice(index, 1);
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
export const {addCity, addTrackCities, deleteCity} = slice.actions


type trackCitiesType = Array<number>