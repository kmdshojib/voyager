import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Axios, { AxiosRequestConfig, AxiosError } from "axios";
import { HYDRATE } from 'next-redux-wrapper'

const axiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> => async ({ url, method, data, params }) => {
  try {
    const baseURL =
      process.env.NODE_ENV === "production"
        ? "https://voyager-murex.vercel.app/api/"
        : "http://localhost:3000/api/";

    Axios.defaults.baseURL = baseURL;

    const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      params: { ...params },
    };

    if (method === "POST") {
      axiosConfig.data = data;
    }

    const result = await Axios(axiosConfig);
    return { data: result.data };

  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return { error };
  }
};
function isHydrateAction(action: Action): action is PayloadAction<any> {
  return action.type === HYDRATE
}
export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
  reducerPath: "apiService",
});