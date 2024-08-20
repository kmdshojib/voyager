import { apiService } from "../apiService";

export const authService = apiService.injectEndpoints({
    endpoints: (build) => ({
        signinUser: build.mutation<any, any>({
            query: (credentials) => ({
                url: "signin",
                method: "POST",
                data: credentials,
            }),
        })
    })
})

export const { useSigninUserMutation } = authService