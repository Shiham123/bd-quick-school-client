import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app

export const helpDeskApiSlice = createApi({
  reducerPath: 'helpDeskApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getAllHelpPost: builder.query({ query: () => '/HelpDeskRoutes', providesTags: ['HelpDesk'] }),

    // //Get Id base comment
    getIdBasedComment: builder.query({ query: (id) => `/CommentRoutes/${id}`, providesTags: ['HelpDesk'] }),

    // //Get Id base help post
    getIdBasedPost: builder.query({ query: (id) => `/HelpDeskRoutes/${id}`, providesTags: ['HelpDesk'] }),

    //Post Data
    addHelpPost: builder.mutation({
      query: (payload) => ({
        url: `/HelpDeskRoutes`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['HelpDesk'],
    }),

    // commnet post
    addCommentPost: builder.mutation({
      query: (payload) => ({
        url: `/CommentRoutes`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['HelpDesk'],
    }),
  }),
});

// expoer all routes
export const {
  useGetAllHelpPostQuery,
  useGetIdBasedCommentQuery,
  useGetIdBasedPostQuery,
  useAddHelpPostMutation,
  useAddCommentPostMutation,
} = helpDeskApiSlice;
