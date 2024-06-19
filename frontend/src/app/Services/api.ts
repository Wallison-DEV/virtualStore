import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:8000/'
    }),
    endpoints: (builder)=>({
        doLogin: builder.mutation({
            query: (body)=>({
                url: 'api/token',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
        }),
    })
})
export const { useDoLoginMutation } = api

export default api