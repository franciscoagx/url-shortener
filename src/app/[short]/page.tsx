import { notFound, redirect } from 'next/navigation';

import { arrayTest } from '@/data/test';

const getData = async (short: string) => {
  const match = arrayTest.find((item) => item.hash === short);
  if (!match) {
    return notFound();
  }

  return match;
};

export default async function Page({ params }: { params: Promise<{ short: string }> }) {
  const { short } = await params;
  const data = await getData(short);

  if (data?.url) {
    redirect(data.url);
  } else {
    return notFound();
  }
}
