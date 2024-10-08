import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from '../interface/user.interface';

export const reviewSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    date: { type: Date, default: Date.now }
});

const userSchema = new Schema<IUser>({
    name: { type: String, required: [true, "Please provide your name!"] },
    email: { type: String, required: [true, "Please provide an email!"], unique: true },
    password: { type: String },
    socialAuthentication: { type: Boolean, default: false },
    avatar: { type: String },
    refreshToken: { type: String },
    reviews: { type: [reviewSchema], default: [] }  // Array of reviews made by the user
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password!, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password: string | number): Promise<boolean> {
    const stringPassword = typeof password === 'number' ? password.toString() : password;
    return await bcrypt.compare(stringPassword, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET!
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET!
    );
};

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
