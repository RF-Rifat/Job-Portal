/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IChangeEmail,
  IChangePassword,
  IForgotPassword,
  ISigninData,
  // ISignUpData,
} from "@/interface/auth";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signupAsCompany: build.mutation({
      query: (data: any) => {
        return {
          url: "/auth/register/job-seeker",
          method: "POST",
          body: data,
        };
      },
    }),
    signupAsJobSeeker: build.mutation({
      query: (data: any) => {
        return {
          url: "/auth/register/job-seeker",
          method: "POST",
          body: data,
        };
      },
    }),
    signin: build.mutation({
      query: (data: ISigninData) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    isUserExist: build.mutation({
      query: (data) => ({
        url: "/auth/is-exist",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: build.mutation({
      query: (email: IForgotPassword) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: build.mutation({
      query: ({ data, token }) => ({
        url: `/auth/reset-password/${token}`,
        method: "PATCH",
        body: { newPassword: data.newPassword },
      }),
    }),
    changePassword: build.mutation({
      query: (data: IChangePassword) => ({
        url: `/auth/change-password`,
        method: "PATCH",
        body: data,
      }),
    }),
    changeEmail: build.mutation({
      query: (data: IChangeEmail) => ({
        url: `/auth/change-email`,
        method: "PATCH",
        body: data,
      }),
    }),
    sendVerifictionEmail: build.mutation({
      query: (data: { name: string; email: string }) => ({
        url: "/auth/sendVerificationEmail",
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: build.mutation({
      query: (token: string) => ({
        url: `/auth/verify-email/${token}`,
        method: "PATCH",
        invalidatesTags: ["profile"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignupAsCompanyMutation,
  useSignupAsJobSeekerMutation,
  useSigninMutation,
  useIsUserExistMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useChangePasswordMutation,
  useChangeEmailMutation,
  useSendVerifictionEmailMutation,
} = authApi;

export default authApi;
