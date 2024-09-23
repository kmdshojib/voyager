import mongoose, { Schema } from "mongoose";
import { reviewSchema } from "./user.model";
import { ITravel } from "@/interface/tarvel.interface";

// Define the tour plan schema
const tourPlanSchema = new Schema({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

// Define the travel schema
const travelSchema = new Schema<ITravel>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number }, // Optional
    description: { type: String, required: true },
    duration: { type: String, required: true },
    guests: { type: Number, required: true },
    details: { type: String, required: true },
    departurePlace: { type: String, required: true },
    departureTime: { type: String, required: true },
    ageGroup: { type: String, required: true },
    tourPlan: { type: [tourPlanSchema], default: [] },
    reviews: { type: [reviewSchema], default: [] },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
});

// Create the Travel model if it doesn't exist
const Travel = mongoose.models.travels || mongoose.model('travels', travelSchema);
export default Travel;
