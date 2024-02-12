import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';
import { quizeApiServices } from './services/QuizeApiSlice';
import { orderApiSlice } from './services/OrderApiSlice';

const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
    [quizeApiServices.reducerPath]: quizeApiServices.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addServicesApi.middleware,
      quizeApiServices.middleware,
      orderApiSlice.middleware,
    ]),
});

export default store;
