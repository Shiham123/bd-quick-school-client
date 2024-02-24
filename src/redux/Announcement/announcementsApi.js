import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://quiz-school-server.vercel.app //

export const announcementsApi = createApi({
  reducerPath: 'announcementsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quiz-school-server.vercel.app/api/v1/admin' }),
  endpoints: (builder) => ({
    getAllAnnouncements: builder.query({ query: () => '/announcement', providesTags: ['announcement'] }),

    // Get Id base Services
    getIdBasedAnnouncements: builder.query({ query: (id) => `/announcements/${id}`, providesTags: ['announcement'] }),

    //Post Announcement Data
    addAnnouncement: builder.mutation({
      query: (payload) => ({
        url: `/announcement`,
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['announcement'],
    }),

    //Course update
    updateAnnouncement: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/announcements/${id}`,
        method: 'PUT',
        body: payload,
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['announcement'],
    }),

    //Delete Announcement Data
    deleteAnnouncement: builder.mutation({
      query: (id) => ({
        url: `/announcements/${id}`,
        method: 'DELETE',
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` },
      }),
      invalidatesTags: ['announcement'],
    }),
  }),
});

export const {
  useGetAllAnnouncementsQuery,
  useGetIdBasedAnnouncementsQuery,
  useAddAnnouncementMutation,
  useDeleteAnnouncementMutation,
  useUpdateAnnouncementMutation,
} = announcementsApi;
