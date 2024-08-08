import { connectDb } from "@/db/dbConfig";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

connectDb();
const generateAccessAndRefreshTokens = async (userId: string) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error("Error generating access token");
    }
};

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        if (!email || !password) {
            return NextResponse.json({ message: "Invalid email or password", status: 400 });
        }

        const user = await User.findOne({ email:email });
        if (!user) {
            return NextResponse.json({ message: "User not found", status: 401 });
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: "Invalid password", status: 401 });
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        const response = NextResponse.json({ message: "User logged in", status: 200, user: loggedInUser });

        // Set cookies
        response.cookies.set('accessToken', accessToken, {
            httpOnly: true, // Prevent client-side access
            sameSite: 'lax', // CSRF protection
            maxAge: 3600 // Cookie expiration time in seconds
        });

        response.cookies.set('refreshToken', refreshToken, {
            httpOnly: true, // Prevent client-side access
            sameSite: 'lax', // CSRF protection
            maxAge: 604800 // Cookie expiration time in seconds (1 week)
        });

        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong while logging in!", status: 500 });
    }
}
