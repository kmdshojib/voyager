import { connectDb } from "@/db/dbConfig";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

// Function to get user by ID
const getUserById = async (userId: string) => {
    await connectDb();
    const user = await User.findOne({ _id: userId }).select("-password -accessToken").exec();
    return user;
};

// Middleware to verify JWT
export async function middleware(req: NextRequest) {
    try {
        // Extract token from cookies or headers
        const cookieToken = req.cookies.get('accessToken');
        const headerToken = req.headers.get('Authorization')?.replace('Bearer ', '');
        const token = (cookieToken ? cookieToken.toString() : headerToken) || '';

        if (!token) {
            return new NextResponse('Unauthorized request', { status: 401 });
        }

        const decodedToken: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
        const user = await getUserById(decodedToken?._id);

        if (!user) {
            return new NextResponse('Invalid Access Token', { status: 401 });
        }

        (req as any).user = user;

        return NextResponse.next();
    } catch (error) {
        return new NextResponse('Invalid Access Token', { status: 401 });
    }
}

// Middleware configuration
export const config = {
    matcher: ['/api/:path*', '/protected/:path*']
};
