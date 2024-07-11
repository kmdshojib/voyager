import mongoose, { Schema } from "mongoose";
import { IUser } from '../interface/user.interface';

const userShema = new Schema<IUser>({
    name: { type: String, required: [true, "Please Provide your name!"] },
    email: { type: String, required: [true, "Please Provide an eamil!"], unique: true },
    password: { type: String, required: [true, "Please Provide a Password!"] },
    avatar: { type: String },
    accessToken: { type: String, required: true }
})

const User = mongoose.models.users || mongoose.model("users", userShema)
export default User;