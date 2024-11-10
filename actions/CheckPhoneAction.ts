'use server';

// import Prisma from '@/lib/prisma';

import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

export async function CheckPhoneAction(phone: string) {
  const user = await Prisma.user.findUnique({
    where: {
      phone,
    },
  });

  if (!user) {
    const newUser = await Prisma.user.create({
      data: {
        phone,
      },
    });

    if (newUser) return true;
  }

  return true;
}
