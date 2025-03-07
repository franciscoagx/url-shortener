import Image from 'next/image';

export const StaticsCard = ({ title, children, icon }: { title: string; children: string; icon: string }) => {
  return (
    <div className="bg-white p-8 rounded-md relative pt-16 text-center md:text-left">
      <div className="bg-dark-violet p-4 rounded-full w-fit absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto">
        <Image src={icon} alt={title} className="size-10" />
      </div>
      <h3>{title}</h3>
      <p className="text-grayish-violet">{children}</p>
    </div>
  );
};
