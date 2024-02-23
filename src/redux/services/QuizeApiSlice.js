import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// http://localhost:5000

export const quizeApiServices = createApi({
  reducerPath: 'quizeApiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://quiz-school-server.vercel.app/api/v2',
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
