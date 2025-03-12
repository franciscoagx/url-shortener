import IconRecognition from '@/../public/images/icon-brand-recognition.svg';
import IconRecords from '@/../public/images/icon-detailed-records.svg';
import IconCustomizable from '@/../public/images/icon-fully-customizable.svg';
import { LinkList } from '@/components/LinkList';
import { StaticsCard } from '@/components/StaticsCard';

export const StaticsSection = () => {
  return (
    <section className="bg-[#F0F1F6] pt-16 z-10">
      <LinkList />
      <div className="py-24 text-center max-w-desktop mx-auto px-10">
        <div className="text-center mb-20">
          <h2>Advanced Statistics</h2>
          <p className="text-grayish-violet max-w-[480px] mx-auto">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className="relative">
          <div className="relative text-left grid gap-20 md:gap-8 md:grid-flow-col z-20">
            <StaticsCard title="Brand Recognition" icon={IconRecognition}>
              Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil
              confidence in your content.
            </StaticsCard>
            <StaticsCard title="Detailed Records" icon={IconRecords}>
              Gain insights into who is clicking your links. Knowing when and where people engage with your content
              helps inform better decisions.
            </StaticsCard>
            <StaticsCard title="Fully Customizable" icon={IconCustomizable}>
              Improve brand awareness and content discoverability through customizable links, supercharging audience
              engagement.
            </StaticsCard>
          </div>
          <div className="absolute h-full w-2 top-0 left-1/2 -translate-x-1/2 md:h-2 md:w-full md:top-1/2 bg-cyan z-10" />
        </div>
      </div>
    </section>
  );
};
