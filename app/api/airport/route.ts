import dbClient from '@/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  // const { car } = data
  const tour = await dbClient
    .db('rojanoo')
    .collection('airport')
    .find()
    .toArray();

    return new NextResponse(JSON.stringify(tour), { status: 200 });

}



