import { ITravel } from '@/interface/tarvel.interface';
import mongoose, { Schema } from 'mongoose';

const travelSchema = new Schema<ITravel>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    guests: { type: Number, required: true },
    rating: { type: [Number], default: [] }
})

const Travel = mongoose.models.travels || mongoose.model('travels', travelSchema)
export default Travel;