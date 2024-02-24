import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app

export const quizeApiServices = createApi({
  reducerPath: 'quizeApiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v2',
  }),
  endpoints: (builder) => ({
    //Get Data
    getAllQUizeUsers: builder.query({
      query: () => '/quizusers',
      providesTags: ['quize'],
    }),

    //
  }),
});

export const { useGetAllQUizeUsersQuery } = quizeApiServices;
