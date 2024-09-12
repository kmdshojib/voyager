import { NextResponse, NextRequest } from 'next/server';
import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';

export async function GET(req: Request) {
    await connectDb();

    try {
        const category = "popular"
        let query = { category }; // Assuming 'category' is a field in your Travel schema


        // Fetch tours, sort by rating (assuming rating as popularity), and limit the result to 5
        const tours = await Travel.find(query)

        return NextResponse.json({ data: tours, status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Failed to connect to the database', error: err }, { status: 500 });
    }
}
