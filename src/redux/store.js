import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './slicers/jobSlice';
import nozzleReducer from './slicers/nozzleSlice';

const rootReducer = combineReducers({
    jobs: jobReducer,
    nozzles: nozzleReducer
});

const store = configureStore({reducer: rootReducer});

export default store;