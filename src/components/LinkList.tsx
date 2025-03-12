import { LinkCard } from '@/components/LinkCard';
import { arrayTest } from '@/data/test';

export async function LinkList() {
  return (
    <div className="py-4 text-center max-w-desktop mx-auto grid gap-4 px-10">
      {arrayTest.map((link: { url: string; hash: string }) => (
        <LinkCard key={link.hash} url={link.url} hash={link.hash} />
      ))}
    </div>
  );
}
