import mongoose, { Schema, Document } from 'mongoose';

// Define the interface extending Mongoose's Document interface
interface IBookingModel extends Document {
    name: string;
    email: string;
    confirmEmail: string;
    phone: string;
    date: Date;
    tickets: string;
    userId: string;
    message?: string;
}

// Define the Mongoose schema based on the interface
const bookingSchema = new Schema<IBookingModel>({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    confirmEmail: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    phone: { type: String, required: true, minlength: 10 },
    date: { type: Date, required: true },
    tickets: { type: String, required: true },
    userId:{ type: String, required: true},
    message: { type: String },
});

// Create the Booking model or use the existing one
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
export default Booking;
