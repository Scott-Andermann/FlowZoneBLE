import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        CycloneAdjCone: {
            id: 1,
            1: 0.98,
            2: 1.17,
            3: 1.32,
            4: 1.40,
            5: 1.51
        },
        CycloneAdjJet: {
            id: 2,
            1: 1.1,
            2: 1.25,
            3: 1.4,
            4: 1.6,
            5: 1.67
        },
        CyclonePinStream: {
            id: 3,
            1: 1.17,
            2: 1.6,
            3: 1.74,
            4: 1.89,
            5: 2
        },
        CycloneFan: {
            id: 4,
            1: 1.25,
            2: 1.74,
            3: 1.93,
            4: 2.05,
            5: 2.08
        }
    }
}

export const nozzleSlice = createSlice({
    name: 'nozzless',
    initialState,
    reducers: {
        saveNozzle: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        deleteNozzle: (state, action) => {
            state.value = state.value.filter(element => element.id !== action.payload);
        }
    },
});

export const {saveNozzle, deleteNozzle} = nozzleSlice.actions;
export default nozzleSlice.reducer