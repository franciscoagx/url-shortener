import Image from 'next/image';

import Hero from '@/../public/images/illustration-working.svg';
import { Form } from '@/components/Form';
import { StaticsSection } from '@/components/StaticsSection';

export default function Home() {
  return (
    <main className="transition-al">
      <section className="max-w-desktop mx-auto grid grid-flow-row md:grid-flow-col lg:grid-cols-2 gap-8 items-center py-16 px-10">
        <div className="text-center md:text-left row-start-2 md:row-start-auto">
          <h1 className="text-balance">More than just shorter links</h1>
          <p className="text-grayish-violet text-lg text-balance tracking-wider mb-8">
            Build your brand’s recognition and get detailed insights on how your links are performing.
          </p>
          <button className="rounded-full w-fit mx-auto">Get Started</button>
        </div>
        <div className="-mr-20 -mt-10">
          <Image src={Hero} alt="Illustration of a person working on a computer" height={800} />
        </div>
      </section>
      <section className="max-w-desktop mx-auto px-10">
        <Form />
      </section>
      <StaticsSection />
    </main>
  );
}
