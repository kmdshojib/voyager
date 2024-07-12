import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from '../interface/user.interface';

const userSchema = new Schema<IUser>({
    name: { type: String, required: [true, "Please Provide your name!"] },
    email: { type: String, required: [true, "Please Provide an eamil!"], unique: true },
    password: { type: String, required: [true, "Please Provide a Password!"] },
    avatar: { type: String },
    accessToken: { type: String, required: true }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPaswordCorrect = async function (password: string) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User;