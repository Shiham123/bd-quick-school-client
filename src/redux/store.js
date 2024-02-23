import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';
import { quizeApiServices } from './services/QuizeApiSlice';
import { orderApiSlice } from './services/OrderApiSlice';

import { announcementsApi } from './Announcement/announcementsApi';


const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
    [quizeApiServices.reducerPath]: quizeApiServices.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    // [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [announcementsApi.reducerPath]: announcementsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addServicesApi.middleware,
      quizeApiServices.middleware,
      orderApiSlice.middleware,
      announcementsApi.middleware,
    ]),
});

export default store;

