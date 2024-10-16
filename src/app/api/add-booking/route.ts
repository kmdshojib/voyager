import { NextRequest, NextResponse } from "next/server"; // Assuming the Booking model is in the models folder
import mongoose from "mongoose";
import Booking from "@/model/booking.model";
import { connectDb } from "@/db/dbConfig";



export async function POST(req: NextRequest) {
    try {
        // Parse the request body
        const bookingData = await req.json();

        // Connect to the database
        await connectDb();

        // Create a new booking document
        const newBooking = new Booking(bookingData);

        // Save the booking to the database
        await newBooking.save();

        // Return a success response
        return NextResponse.json({status:200, message: "Booking saved successfully", booking: newBooking });
    } catch (error: any) {
        // Handle errors and return a response
        return NextResponse.json({ message: "Error saving booking", error: error.message }, { status: 500 });
    }
}
