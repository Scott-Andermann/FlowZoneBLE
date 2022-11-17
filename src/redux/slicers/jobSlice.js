import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        saveJob: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        deleteJob: (state, action) => {
            state.value = state.value.filter(element => element.id !== action.payload);
        }
    },
});

export const {saveJob, deleteJob} = jobSlice.actions;
export default jobSlice.reducer