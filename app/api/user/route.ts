import dbClient from '@/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  // const { car } = data
  const user = await dbClient
    .db('rojanoo')
    .collection('User')
    .find()
    .toArray();

    return new NextResponse(JSON.stringify(user), { status: 200 });

}




// export default async function Cars() {
//    const car = await dbClient
//   .db('next-members')
//   .collection('carType')
//   .find()
//   .toArray();
// }