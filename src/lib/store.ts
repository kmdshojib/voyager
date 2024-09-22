import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./apiService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from './rootreducer';
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiService.middleware),
    });

setupListeners(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });