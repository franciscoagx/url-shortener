import { LinkCard } from '@/components/LinkCard';

const getLinks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/links`, {
    // cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

export async function LinkList() {
  const links = await getLinks();

  return (
    <div className="py-4 text-center max-w-desktop mx-auto grid gap-4 px-10">
      {links.map((link: { url: string; hash: string }) => (
        <LinkCard key={link.hash} url={link.url} hash={link.hash} />
      ))}
    </div>
  );
}
