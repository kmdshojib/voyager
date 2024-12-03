import { NextRequest, NextResponse } from "next/server";
import { connectDb } from '../../../db/dbConfig';
import Review from "@/model/review.model";

export async function POST(req: NextRequest) {
    connectDb()
    try {
        const reviewData = await req.json();
        if (!reviewData) {
            return NextResponse.json({ message: 'Invalid data provided', status: 400 });
        }
        const newReview = new Review(reviewData)
        await newReview.save();

        return NextResponse.json({ message: 'Review saved successfully', status: 201, review: newReview });
    } catch (err) {
        console.error(err)
    }
}