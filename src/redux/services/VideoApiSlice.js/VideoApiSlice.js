import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// http://localhost:5000

export const addCourseVideoAPi = createApi({
  reducerPath: 'addCourseVideoAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
  }),
  endpoints: (builder) => ({
    getAllCourseVideo: builder.query({ query: () => '/video', providesTags: ['videoCourse'] }),

    //Get Id base Services
    getuserCourseVideoById: builder.query({ query: (id) => `/video/${id}`, providesTags: ['videoCourse'] }),

    //Post Data
    addCourseVideo: builder.mutation({
      query: (payload) => ({
        url: `video/create`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['videoCourse'],
    }),
  }),
});

export const { useAddCourseVideoMutation, useGetAllCourseVideoQuery, useGetuserCourseVideoByIdQuery } = addCourseVideoAPi;
