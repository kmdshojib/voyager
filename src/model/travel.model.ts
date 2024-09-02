import { ITravel } from "@/interface/tarvel.interface";
import mongoose, { Schema } from "mongoose";
import { reviewSchema } from "./user.model";


const tourPlanSchema = new Schema({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});


const travelSchema = new Schema<ITravel>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    guests: { type: Number, required: true },
    tag: { type: String, required: true },
    rating: { type: Number },  // Average rating
    tourPlan: { type: [tourPlanSchema], default: [] },
    reviews: { type: [reviewSchema], default: [] },  // Array of reviews
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
});

const Travel = mongoose.models.travels || mongoose.model('travels', travelSchema);
export default Travel;
