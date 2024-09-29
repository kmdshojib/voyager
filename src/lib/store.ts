import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./apiService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from './rootreducer';
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiService.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};


export const wrapper = createWrapper(makeStore);

// Create persistor (can be used separately)
export const persistor = (store: ReturnType<typeof makeStore>) => persistStore(store);

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
