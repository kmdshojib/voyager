import { connectDb } from "@/db/dbConfig";
import { ITravel } from "@/interface/tarvel.interface";
import Travel from "@/model/travel.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    await connectDb(); // Connect to the database

    try {
        // Parse the request body to get the travel details
        const reqBody: ITravel = await req.json();


        // Validate required fields (optional but recommended)
        if (!reqBody.name || !reqBody.price || !reqBody.image || !reqBody.description || !reqBody.duration || !reqBody.guests || !reqBody.tag) {
            return NextResponse.json(
                {
                    message: "Missing required fields",
                    status: 400,
                }
            );
        }

        // Create a new travel document using the parsed data
        const newTravel = new Travel(reqBody);

        // Save the travel document to the database
        await newTravel.save();

        // Return a success response
        return NextResponse.json(
            {
                message: "Travel listing created successfully",
                status: 201,
                data: newTravel
            }
        );

    } catch (e) {
        // Log the error and return an error response
        console.error(e);
        return NextResponse.json(
            {
                message: "Something went wrong while creating the tour listing",
                status: 500
            }
        );
    }
}
