import {notFound} from 'next/navigation';
import dbClient from '@/db/mongodb';
import {ObjectId} from 'mongodb';
import Link from 'next/link';
import {deleteVisa} from '@/actions';

interface VisaPageProps {
  params: {
    id: string;
  };
}

export default async function VisaPage(props: VisaPageProps) {
  const visa = await dbClient
    .db('rojanoo')
    .collection('visa')
    .findOne({_id: new ObjectId(props.params.id)});

  console.log(visa);

  if (!visa) {
    return notFound();
  }

  return (
    <div className="container mx-auto bg-blue-700">
      <div className="p-2 flex items-center">
        <div className="flex-col text-white ml-5">
          <div className="text-2xl font-bold">{visa.name}</div>
        </div>
      </div>

      <div className="flex gap-2 justify-end p-5">
        <Link
          href={`/visa/${visa._id}/edit`}
          className="bg-yellow-300 p-3 rounded"
        >
          Edit
        </Link>

        <form action={deleteVisa.bind(null, visa._id)}>
          <button className="bg-red-500 p-3 rounded">Delete</button>
        </form>
      </div>
    </div>
  );
}
