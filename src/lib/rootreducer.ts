import { combineReducers } from "@reduxjs/toolkit";
import { apiService } from "./apiService";
import authReducer from "./features/authSlice"
export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    auth: authReducer
})