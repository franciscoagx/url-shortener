/* eslint-disable simple-import-sort/imports */
import { arrayTest } from '@/data/test';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(arrayTest);
}
