import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app

export const addCourseVideoAPi = createApi({
  reducerPath: 'addCourseVideoAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://quiz-school-server.vercel.app/api/v1',
  }),
  endpoints: (builder) => ({
    getAllCourseVideo: builder.query({ query: () => '/video', providesTags: ['videoCourse'] }),

    //Get Id base Services
    getuserCourseVideoById: builder.query({ query: (id) => `/video/${id}`, providesTags: ['videoCourse', 'reaction'] }),

    //Get Id base Services
    getuserReactionVideoById: builder.query({
      query: (payload) => `/video/reaction/single/${payload}`,
      providesTags: ['videoCourse'],
    }),

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

    //Video Reaction  Data
    videoReaction: builder.mutation({
      query: (payload) => ({
        url: `/video/reaction`,
        method: 'PATCH',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['videoCourse'],
    }),
  }),
});

export const {
  useAddCourseVideoMutation,
  useVideoReactionMutation,
  useGetAllCourseVideoQuery,
  useGetuserReactionVideoByIdQuery,
  useGetuserCourseVideoByIdQuery,
} = addCourseVideoAPi;
