import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';
import { orderApiSlice } from './services/OrderApiSlice';
import { addCourseVideoAPi } from './services/VideoApiSlice.js/VideoApiSlice';
import { announcementsApi } from './Announcement/announcementsApi';
import { quizApi } from './IsQuizUser/QuizUserSlice';

const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    // [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addServicesApi.middleware,
      orderApiSlice.middleware,
      announcementsApi.middleware,
      addCourseVideoAPi.middleware,
      quizApi.middleware,
    ]),
});

export default store;
