import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';
import { quizeApiServices } from './services/QuizeApiSlice';
import { orderApiSlice } from './services/OrderApiSlice';
import { addCourseVideoAPi } from './services/VideoApiSlice.js/VideoApiSlice';

import { announcementsApi } from './Announcement/announcementsApi';
import { helpDeskApiSlice } from './services/HelpDeskApiSlice';


const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
    [quizeApiServices.reducerPath]: quizeApiServices.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    // [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [helpDeskApiSlice.reducerPath]: helpDeskApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addServicesApi.middleware,
      quizeApiServices.middleware,
      orderApiSlice.middleware,
      announcementsApi.middleware,
      addCourseVideoAPi.middleware,
      helpDeskApiSlice.middleware,
    ]),
});

export default store;

