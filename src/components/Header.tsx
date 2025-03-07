import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/../public/images/logo.svg';
export const Header = () => {
  return (
    <header className="max-w-desktop mx-auto py-6 md:py-12 flex justify-between text-grayish-violet px-10">
      <div className="grid  grid-flow-col gap-10 items-center">
        <Image src={Logo} alt="Logo" />
        <div className=" gap-6 hidden md:flex">
          <Link href="/">Features</Link>
          <Link href="/">Princing</Link>
          <Link href="/">Resources</Link>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/">Login</Link>
        {/* <button className="rounded-full">Login</button> */}
        <button className="rounded-full !px-6 !py-2 !font-normal">Sign Up</button>
      </div>
    </header>
  );
};
