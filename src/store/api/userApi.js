// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/user'
        }),
    }),
});

export const { useGetUserQuery } = userApi;