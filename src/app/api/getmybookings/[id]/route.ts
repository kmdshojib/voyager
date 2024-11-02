import { NextRequest, NextResponse } from "next/server"; 
import mongoose from "mongoose";
import Booking from "@/model/booking.model";
import { connectDb } from "@/db/dbConfig";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await connectDb(); 

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ status: 400, message: "Invalid booking ID" });
        }

        const booking = await Booking.find({userId: id});

        if (!booking) {
            return NextResponse.json({ status: 404, message: "Booking not found" });
        }

        return NextResponse.json({ status: 200, message: "Booking found", booking });
    } catch (error: any) {
        return NextResponse.json({ message: "Error retrieving booking", error: error.message }, { status: 500 });
    }
}
