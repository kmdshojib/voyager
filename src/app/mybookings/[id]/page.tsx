"use client"

import { useMybookingsQuery } from "@/lib/services/tourService"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function MyBookings() {
  const { id } = useParams()
  const { isLoading, data, error } = useMybookingsQuery(id)
  const [payingBookingId, setPayingBookingId] = useState<string | null>(null)
  console.log(data)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handlePayment = async (bookingId: string) => {
    setPayingBookingId(bookingId)
    // Here you would typically call a payment API
    // For this example, we'll just simulate a payment with a timeout
    await new Promise(resolve => setTimeout(resolve, 2000))
    setPayingBookingId(null)
    // After successful payment, you might want to refetch the bookings data
    // or update the local state to reflect the new payment status
  }

  if (isLoading) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle><Skeleton className="h-8 w-3/4" /></CardTitle>
          <CardDescription><Skeleton className="h-4 w-1/2" /></CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="w-full max-w-4xl mx-auto mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error loading your bookings. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  if (!data || data?.booking.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>You haven&apos;t made any bookings yet.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>My Bookings</CardTitle>
        <CardDescription>Here&apos;s a list of all your tour bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Tickets</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.booking.map((booking: any) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.tourName}</TableCell>
                <TableCell>{formatDate(booking.date)}</TableCell>
                <TableCell>{booking.tickets}</TableCell>
                <TableCell>{booking.paymentStatus}</TableCell>
                <TableCell>
                  {booking.paymentStatus === 'Unpaid' && (
                    <Button 
                      onClick={() => handlePayment(booking.id)}
                      disabled={payingBookingId === booking.id}
                    >
                      {payingBookingId === booking.id ? 'Processing...' : 'Pay Now'}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}