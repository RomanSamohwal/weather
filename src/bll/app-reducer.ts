import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'loading',
        error: null,
        isInitialized: false,

    } as InitialStateType,
    reducers: {
        setAppError(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
        setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        }
    }
})

export const appReducer = slice.reducer
export const {setAppError, setAppStatus} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}