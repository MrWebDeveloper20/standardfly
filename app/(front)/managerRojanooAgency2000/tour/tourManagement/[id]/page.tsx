import {notFound} from 'next/navigation';
import dbClient from '@/db/mongodb';
import {ObjectId} from 'mongodb';
import Link from 'next/link';
import {deleteTour} from '@/actions';

interface TourPageProps {
  params: {
    id: string;
  };
}

export default async function TourPage(props: TourPageProps) {
  const tour = await dbClient
    .db('rojanoo')
    .collection('tour')
    .findOne({_id: new ObjectId(props.params.id)});

  console.log(tour);

  if (!tour) {
    return notFound();
  }

  return (
    <div className="container mx-auto bg-blue-700">
      <div className="p-2 flex items-center">
        <div className="flex-col text-white ml-5">
          <div className="text-2xl font-bold">{tour.name}</div>
        </div>
      </div>

      <div className="flex gap-2 justify-end p-5">
        <Link
          href={`/tour/${tour._id}/edit`}
          className="bg-yellow-300 p-3 rounded"
        >
          Edit
        </Link>

        <form action={deleteTour.bind(null, tour._id)}>
          <button className="bg-red-500 p-3 rounded">Delete</button>
        </form>
      </div>
    </div>
  );
}
