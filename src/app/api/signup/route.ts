// pages/api/register/route.ts
import { connectDb } from "@/db/dbConfig";
import { IUser } from "@/interface/user.interface";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    await connectDb();
    try {
        const reqBody = await req.json();
        const { email, password, name }: IUser = reqBody as IUser;

        // Validate input fields
        // if ([name, email, password].some(field => !field.trim())) {
        //     return NextResponse.json({ message: "All fields are required", status: 400 });
        // }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists", status: 400 });
        }

        // Create new user
        const createdUser = await User.create({ name, email, password });
        if (!createdUser) {
            return NextResponse.json({ message: "Something went wrong while creating the user", status: 500 });
        }

        return NextResponse.json({ status: 200, message: "User created successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred", status: 500 });
    }
}
