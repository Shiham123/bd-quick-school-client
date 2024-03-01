import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app

export const addServicesApi = createApi({
  reducerPath: 'addServicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quiz-school-server.vercel.app/api/v3' }),
  endpoints: (builder) => ({
    getAllServices: builder.query({ query: () => '/', providesTags: ['services'] }),

    //Get Id base Services
    getIdBasedServices: builder.query({ query: (id) => `/${id}`, providesTags: ['services'] }),

    //Post Data
    addServices: builder.mutation({
      query: (payload) => ({
        url: `/create`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['services'],
    }),

    //Course update
    updateServices: builder.mutation({
      query: (payload) => ({
        url: `/course/update`,
        method: 'PUT',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['services'],
    }),

    //Course update
    updateServicesLessionAndTopic: builder.mutation({
      query: (payload) => ({
        url: `/update/lession`,
        method: 'PATCH',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['services'],
    }),

    //Delete Course Data
    deleteCourses: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE',
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['services'],
    }),
    //
  }),
});

export const {
  useGetAllServicesQuery,
  useGetIdBasedServicesQuery,
  useAddServicesMutation,
  useUpdateServicesMutation,
  useDeleteCoursesMutation,
  useUpdateServicesLessionAndTopicMutation,
} = addServicesApi;
