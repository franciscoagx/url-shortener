import { notFound, redirect } from 'next/navigation';

const getData = async (short: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hash/${short}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  const data = await res.json();
  return data;
};

export default async function Page({ params }: { params: { short: string } }) {
  const { short } = params;
  const data = await getData(short);

  if (data?.url) {
    redirect(data.url);
  } else {
    return notFound();
  }
}
