import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const id = params.id;
        const tour = await Travel.findById({ _id: id });
        return NextResponse.json(tour, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Error fetching ID' }, { status: 500 });
    }
}
