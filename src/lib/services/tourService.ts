import { apiService } from "../apiService";

export const tourService = apiService.injectEndpoints({
    endpoints: (build) => ({
        tourCategory: build.query<any, any>({
            query: (category: string) => ({
                url: `getTour?category=${category}`,
                method: "GET"
            })
        })
    })
})

export const { useTourCategoryQuery } = tourService