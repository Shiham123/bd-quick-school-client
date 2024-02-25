import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quiz-school-server.vercel.app/api/v2' }),
  endpoints: (builder) => ({
    getQuizUserByEmail: builder.query({
      query: ({ id, email }) => `/quizUsers/${id}/${email}`,
    }),
  }),
});

export const { useGetQuizUserByEmailQuery } = quizApi;
