import { apiSlice } from "./apiSlice";

const USER_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    logOut: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
    forgetPassword:builder.mutation({
      query:(data)=>({
        url:`${USER_URL}/forgetpassword`,
        method:"POST",
        body:data
      })
    }),
    resetPassword:builder.mutation({
      query:(data)=>({
        url:`${USER_URL}/resetpassword/${data.token.token}`,
        method:'PUT',
        body:data
      })
    })
  }),
});

export const { useLoginMutation, useRegisterUserMutation, useLogOutMutation,useForgetPasswordMutation ,useResetPasswordMutation} = usersApiSlice;
