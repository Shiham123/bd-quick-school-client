import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://bd-quick-school-server-plum.vercel.app

export const quizeApiServices = createApi({
  reducerPath: 'quizeApiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bd-quick-school-server-plum.vercel.app/api/v2',
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
