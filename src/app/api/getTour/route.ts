import { NextResponse, NextRequest } from 'next/server';
import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';

export async function GET(req: Request) {
    await connectDb();

    try {
        // Get query params from the request URL
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');

        let query = {};

        if (category && category !== 'All') {
            query = { category };
        }

        const tours = await Travel.find(query).limit(6);

        return NextResponse.json({ data: tours, status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Failed to connect to the database' }, { status: 500 });
    }
}
