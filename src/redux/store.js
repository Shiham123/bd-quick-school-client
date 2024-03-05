import { configureStore } from '@reduxjs/toolkit';
import { addServicesApi } from './services/ServicesApiSlice';
import { quizeApiServices } from './services/QuizeApiSlice';
import { orderApiSlice } from './services/OrderApiSlice';
import { addCourseVideoAPi } from './services/VideoApiSlice.js/VideoApiSlice';
import { announcementsApi } from './Announcement/announcementsApi';
import { quizApi } from './IsQuizUser/QuizUserSlice';
import { helpDeskApiSlice } from './services/HelpDeskApiSlice';
import { ReviewApiSlice } from './services/ReviewApiSlice';

const store = configureStore({
  reducer: {
    [addServicesApi.reducerPath]: addServicesApi.reducer,
    [quizeApiServices.reducerPath]: quizeApiServices.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    // [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [addCourseVideoAPi.reducerPath]: addCourseVideoAPi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [helpDeskApiSlice.reducerPath]: helpDeskApiSlice.reducer,
    [ReviewApiSlice.reducerPath]: ReviewApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addServicesApi.middleware,
      quizeApiServices.middleware,
      orderApiSlice.middleware,
      announcementsApi.middleware,
      addCourseVideoAPi.middleware,
      quizApi.middleware,
      helpDeskApiSlice.middleware,
      ReviewApiSlice.middleware,
    ]),
});

export default store;
