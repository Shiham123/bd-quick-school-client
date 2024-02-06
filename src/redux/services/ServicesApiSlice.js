import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addServicesApi = createApi({
  reducerPath: 'addServicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bd-quick-school-server-plum.vercel.app/api/v3' }),
  endpoints: (builder) => ({
    //Get Data
    getAllServices: builder.query({
      query: () => '/',
      providesTags: ['services'],
    }),

    //Get Id base Services
    getIdBasedServices: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['services'],
    }),

    //Post Data
    addServices: builder.mutation({
      query: (payload) => ({
        url: `/create`,
        method: 'POST',
        body: payload,
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      }),
      invalidatesTags: ['services'],
    }),
    //
  }),
});

export const { useGetAllServicesQuery, useGetIdBasedServicesQuery, useAddServicesMutation } =
  addServicesApi;
