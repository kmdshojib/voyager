import { NextResponse,NextRequest } from 'next/server';
import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';

export async function GET(req: Request) {
    await connectDb();

    try {
        // Get query params from the request URL
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');

        let query = {};

        // If a category is provided and it's not "All", filter by category
        if (category && category !== 'All') {
            query = { category }; // Assuming 'category' is a field in your Travel schema
        }

        const tours = await Travel.find(query);

        return NextResponse.json({ data: tours, status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Failed to connect to the database' }, { status: 500 });
    }
}
