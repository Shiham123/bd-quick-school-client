import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApiSlice = createApi({
  reducerPath: 'orderApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bd-quick-school-server-plum.vercel.app/api/v1',
  }),
  endpoints: (builder) => ({
    //Get Data
    getAllOrders: builder.query({
      query: () => '/user/order',
      providesTags: ['orderData'],
    }),

    //
  }),
});

export const { useGetAllOrdersQuery } = orderApiSlice;
