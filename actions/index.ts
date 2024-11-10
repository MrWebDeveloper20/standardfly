'use server';

import dbClient from '@/db/mongodb';
import {
  Member,
  Tour,
  Visa,
  User
} from '@/types';
import {ObjectId} from 'mongodb';
import {redirect} from 'next/navigation';

/**
 * Edit Member
 * @param member
 */
export const editMemberAction = async (member: Member) => {
  await dbClient
    .db('next-members')
    .collection<Member>('members')
    .findOneAndUpdate(
      {_id: new ObjectId(member._id)},
      {
        $set: {
          name: member.name,
          avatar: member.avatar,
        },
      }
    );

  redirect(`/members/${member._id}`);
};

export const editTourAction = async (tour: Tour) => {
  await dbClient
    .db('rojanoo')
    .collection<Tour>('tour')
    .findOneAndUpdate(
      {_id: new ObjectId(tour._id)},
      {
        $set: {
          name: tour.name,
          price: tour.price,
          duration: tour.duration,
          startDate: tour.startDate,
          endDate : tour.endDate,
          planName: tour.planName,
          planDescription: tour.planDescription,
          nightPlan : tour.nightPlan
        },
      }
    );

  redirect(`/info/hotels/hotelRaste`);
};

export const editUserAction = async (user: User) => {
  await dbClient
    .db('rojanoo')
    .collection<User>('User')
    .findOneAndUpdate(
      {_id: new ObjectId(user._id)},
      {
        $set: {
          name: user.name,
          family: user.family,
          phone: user.phone,
        },
      }
    );

  redirect(`/`);
};



/**
 * Create Member
 * @param formData
 */
export const createMember = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const avatar = formData.get('avatar') as string;

  const member = await dbClient
    .db('rojanoo')
    .collection('members')
    .insertOne({name, avatar, createdAt: new Date().toISOString()});

  console.log(member);
  redirect('/members');
};

export const createTour = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;
  const duration = formData.get('duration') as string;
  const startDate = formData.get('startDate') as string;
  const endDate = formData.get('endDate') as string;
  const planName = formData.get('planName') as string;
  const planDescription = formData.get('planDescription') as string;
  const nightPlan = formData.get('nightPlan') as string;
  const image = formData.get('image') as string;

  const tour = await dbClient
    .db('rojanoo')
    .collection('tour')
    .insertOne({name, price, duration, startDate, endDate, planName, planDescription, nightPlan, image, createdAt: new Date().toISOString()});

  console.log(tour);
  redirect('/tour');
};

export const createVisa = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const latin = formData.get('latin') as string;
  const startDate = formData.get('startDate') as string;
  const endDate = formData.get('endDate') as string;
  const price = formData.get('price') as string;
  const unit = formData.get('unit') as string;
  const image = formData.get('image') as string;

  const visa = await dbClient
    .db('rojanoo')
    .collection('visa')
    .insertOne({name, latin ,price, startDate, endDate, unit, image, createdAt: new Date().toISOString()});

  console.log(visa);
  redirect('/visa');
};

export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const family = formData.get('family') as string;
  const phone = formData.get('phone') as string;
  

  const user = await dbClient
    .db('rojanoo')
    .collection('User')
    .insertOne({name, family, phone, createdAt: new Date().toISOString()});

  console.log(user);
  redirect('/');
};




/**
 * Delete Member
 * @param id
 */
export const deleteMember = async (id: ObjectId) => {
  await dbClient
    .db('rojanoo')
    .collection('members')
    .findOneAndDelete({_id: new ObjectId(id)});
  redirect('/members');
};

export const deleteTour = async (id: ObjectId) => {
  await dbClient
    .db('rojanoo')
    .collection('tour')
    .findOneAndDelete({_id: new ObjectId(id)});
  redirect('/tour');
};

export const deleteVisa = async (id: ObjectId) => {
  await dbClient
    .db('rojanoo')
    .collection('visa')
    .findOneAndDelete({_id: new ObjectId(id)});
  redirect('/visa');
};

export const deleteUser = async (id: ObjectId) => {
  await dbClient
    .db('rojanoo')
    .collection('User')
    .findOneAndDelete({_id: new ObjectId(id)});
  redirect('./../../managerRojanooAgency2000');
};
