import TourEditForm from '@/components/tour/tour-edit-form';
import dbClient from '@/db/mongodb';
import {Tour} from '@/types';
import {ObjectId} from 'mongodb';
import {notFound} from 'next/navigation';

interface EditTourProps {
  params: {
    id: string;
  };
}

export default async function EditTourPage(props: EditTourProps) {
  const tour = await dbClient
    .db('rojanoo')
    .collection<Tour>('tour')
    .findOne({_id: new ObjectId(props.params.id)});

  console.log(tour);

  if (!tour) {
    return notFound();
  }

  return (
    <div>
      <TourEditForm tour={tour} />
    </div>
  );
}
