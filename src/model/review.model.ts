import mongoose from "mongoose";
import { IReview } from "@/interface/review.interface";

const reviewSchema = new mongoose.Schema<IReview>({
    user: { type: String, required: true },
    email: { type: String, required: true },
    ratings: {
        accommodation: { type: Number, required: true, min: 0, max: 5 },
        destination: { type: Number, required: true, min: 0, max: 5 },
        meals: { type: Number, required: true, min: 0, max: 5 },
        transport: { type: Number, required: true, min: 0, max: 5 },
        valueForMoney: { type: Number, required: true, min: 0, max: 5 },
        overall: { type: Number, required: true, min: 0, max: 5 },
    },
    comment: { type: String, default: "" },
    date: { type: Date, default: Date.now },
});

const Review = mongoose.models.reviews || mongoose.model<IReview>("reviews", reviewSchema);

export default Review;
