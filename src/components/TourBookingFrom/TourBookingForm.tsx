"use client"

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useAppSelector } from '@/lib/hooks'
import { useToast } from "@/components/ui/use-toast"
import { useAddBookingsMutation } from '@/lib/services/tourService'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    confirmEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    date: z.date({
        required_error: "Please select a date.",
    }),
    tickets: z.string().min(1, {
        message: "Please enter the number of tickets.",
    }),
    message: z.string().optional(),
    userId: z.string(),
})

export default function TourBookingForm() {
    const [isAvailable, setIsAvailable] = useState(false)
    const user = useAppSelector((state) => state.auth.user)
    const { toast } = useToast()
    const [addTour,{isLoading} ] = useAddBookingsMutation()

    console.log(user)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            confirmEmail: "",
            phone: "",
            tickets: "",
            message: "",
        },
    })

    useEffect(() => {
        if (user) {
            form.setValue('name', user.name || '')
            form.setValue('email', user.email || '')
            form.setValue('confirmEmail', user.email || '')
        }
    }, [user, form])

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        if (!user) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please sign in to book this tour.",
            });
            return;
        }
        const userID = user._id;
        values.userId = userID;
    
        try {
            const response: any = await addTour(values);
    
            if (response) {
                const { message } = response;
                console.log(response, message);
                
                toast({
                    title: message || "Tour booked successfully!",
                    variant: "default",
                    className: "bg-green-500 text-white",
                    duration: 3000,
                });
            } else {
                throw new Error(response?.message || "Booking failed.");
            }
        } catch (error: any) {
            console.error("Error booking tour:", error);
    
            toast({
                title: "Booking Error",
                description: error?.message || "An unexpected error occurred.",
                variant: "destructive",
                className: "bg-red-500 text-white",
                duration: 3000,
            });
        }
    }, [user]); // Added `user` to dependencies
    

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">BOOK THIS TOUR</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name *" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email *" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Confirm Email *" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>dd-mm-yy *</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tickets"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Number of tickets *" type="number" min="1" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsAvailable(true)}
                    >
                        Check Availability
                    </Button>
                    {
                        isLoading ? <Button type="submit" className="w-full" disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      </Button> : <Button type="submit" className="w-full">
                        BOOK NOW
                    </Button>
                    }
                    
                </form>
            </Form>
        </div>
    )
}