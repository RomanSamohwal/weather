import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'loading',
        error: null,
        isInitialized: false,

    } as InitialStateType,
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        }
    }
})

export const appReducer = slice.reducer
export const {setAppErrorAC, setAppStatusAC} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}