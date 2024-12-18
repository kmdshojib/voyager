import { apiService } from "../apiService";

export const tourService = apiService.injectEndpoints({
    endpoints: (build) => ({
        tourCategory: build.query<any, any>({
            query: (category: string) => ({
                url: `getTour?category=${category}`,
                method: "GET"
            })
        }),
        addBookings: build.mutation<any, any>({
            query: (booking: any) => ({
                url: "add-booking",
                method: "POST",
                data: booking
            })
        }),
        mybookings:build.query<any, any>({
         query: (id: any) =>({
            url: `getmybookings/${id}`,
            method: "GET",
         })
        })
    })
})

export const { 
    useTourCategoryQuery,
    useAddBookingsMutation,
    useMybookingsQuery
} = tourService