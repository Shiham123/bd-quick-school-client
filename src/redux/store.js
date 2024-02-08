import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';

const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([addServicesApi.middleware]),
});

export default store;
