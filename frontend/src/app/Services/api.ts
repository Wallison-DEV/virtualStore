import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: (builder)=>({
        doLogin: builder.mutation({
            query: (body)=>({
                url: 'api/token/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
        }),
        signupClient: builder.mutation({
            query: (body)=>({
                url: 'user/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
        }),
        signupBusiness: builder.mutation({
            query: (body)=>({
                url: 'company/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
        }),
        
    })
})
export const { 
    useDoLoginMutation,
    useSignupClientMutation,
    useSignupBusinessMutation,
} = api

export default api