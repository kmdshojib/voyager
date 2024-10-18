import { NextRequest, NextResponse } from "next/server"; // Assuming the Booking model is in the models folder
import mongoose from "mongoose";
import Booking from "@/model/booking.model";
import { connectDb } from "@/db/dbConfig";



export async function POST(req: NextRequest) {
    try {
        const bookingData = await req.json();

        await connectDb();

        const newBooking = new Booking(bookingData);

        await newBooking.save();

        return NextResponse.json({status:200, message: "Booking saved successfully", booking: newBooking });
    } catch (error: any) {
        return NextResponse.json({ message: "Error saving booking", error: error.message }, { status: 500 });
    }
}
