import { NextResponse } from 'next/server';
import { connectDb } from '@/db/dbConfig';
import Travel from '@/model/travel.model';


export async function GET() {
    await connectDb()

    try {
        const tours = await Travel.find()

        return NextResponse.json({ data: tours, status: 200 })

    } catch (err) {
        return NextResponse.json({ message: 'Failed to connect to the database' }, { status: 500 })
    }

}