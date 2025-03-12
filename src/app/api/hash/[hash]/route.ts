/* eslint-disable simple-import-sort/imports */
import { arrayTest } from '@/data/test';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

interface Params {
  params: {
    hash: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const match = arrayTest.find((item) => item.hash === params.hash);

  if (!match) {
    return notFound();
  }

  return NextResponse.json(match);
}
