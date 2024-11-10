import dbClient from '@/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  // const { car } = data
  const visa = await dbClient
    .db('rojanoo')
    .collection('visa')
    .find()
    .toArray();

    return new NextResponse(JSON.stringify(visa), { status: 200 });

}




// export default async function Cars() {
//    const car = await dbClient
//   .db('next-members')
//   .collection('carType')
//   .find()
//   .toArray();
// }