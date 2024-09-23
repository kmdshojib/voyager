import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDb();

        const { id } = params;

        const tour = await Travel.findById(id);

        if (!tour) {
            return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
        }

        return NextResponse.json(tour, { status: 200 });
    } catch (error) {
        console.error('Error fetching tour:', error);

        return NextResponse.json({ error: 'Failed to fetch tour data' }, { status: 500 });
    }
}
