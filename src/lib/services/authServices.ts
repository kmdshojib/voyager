import { apiService } from "../apiService";

export const authService = apiService.injectEndpoints({
    endpoints: (build) => ({
        signinUser: build.mutation<any, any>({
            query: (credentials) => ({
                url: "signin",
                method: "POST",
                data: credentials,
            }),
        }),
        signUpUser: build.mutation<any, any>({
            query: (credentials) => ({
                data: credentials,
                method: "POST",
                url: "signup"
            }),
        })
    })
})

export const { useSigninUserMutation, useSignUpUserMutation } = authService