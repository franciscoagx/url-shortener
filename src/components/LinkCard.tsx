import Link from 'next/link';
export const LinkCard = ({ url, shortUrl }: { url: string; shortUrl: string }) => {
  return (
    <div className="bg-white rounded-md py-4 px-6 md:flex justify-between items-center text-left w-full truncate gap-4">
      <div className="grid grid-flow-col items-center gap-4 overflow-hidden">
        <Link href={url} className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {url}
        </Link>
      </div>
      <div className="grid md:grid-flow-col items-center gap-2 md:gap-4">
        <div className="md:hidden border-t border-gray/50 mt-2" />
        <div className="flex items-center gap-2">
          {/* <svg className="size-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="QrCode2Icon">
            <path d="M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z" />
          </svg> */}
          <Link href={shortUrl} className="text-cyan overflow-hidden overflow-ellipsis whitespace-nowrap">
            {shortUrl}
          </Link>
        </div>
        <button className="rounded-md !px-6 !py-2 !font-normal w-full">Copy</button>
      </div>
    </div>
  );
};
