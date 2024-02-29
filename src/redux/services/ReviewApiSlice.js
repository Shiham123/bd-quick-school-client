import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app

export const ReviewApiSlice = createApi({
  reducerPath: 'ReviewApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quiz-school-server.vercel.app/api/v2' }),
  endpoints: (builder) => ({
    getAllReviewPost: builder.query({ query: () => '/admin/advertisement/reviews', providesTags: ['Review'] }),

    //Post Data
    addReviewPost: builder.mutation({
      query: (payload) => ({
        url: `/reviewpost`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

// expoer all routes
export const { useGetAllReviewPostQuery, useAddReviewPostMutation } = ReviewApiSlice;
