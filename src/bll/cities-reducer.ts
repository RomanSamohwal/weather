import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiCity} from "../api/api-city";

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
            trackCities: [],
            searchCities: []
        },
        reducers: {
            addCity(state, action: PayloadAction<{ city: string }>) {
                // @ts-ignore
                state.trackCities.push(action.payload.city)
            }
        },
        extraReducers: builder => {
            builder.addCase(fetchSearchCities.fulfilled, (state, action) => {
                if (action.payload !== undefined) {
                    // @ts-ignore
                    state.searchCities = action.payload
                }
            })
        }
    }
)

export const citiesReducer = slice.reducer
export const {addCity} = slice.actions
