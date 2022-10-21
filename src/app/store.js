import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {  weatherApis, mapApi } from '../api/apiSlice';


export const store = configureStore({
  reducer: {
    [weatherApis.reducerPath]: weatherApis.reducer,
    [mapApi.reducerPath]: mapApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApis.middleware),
    
});



setupListeners(store.dispatch);

