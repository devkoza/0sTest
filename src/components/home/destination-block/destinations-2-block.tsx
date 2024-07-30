'use client';

import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import Section from '@/components/ui/section';
import DestinationCarousel2 from './destination-carousel';
import BlockLoader2 from '@/components/ui/loader/block-loader-2';


export default function DestinationsBlock2() {
  const { state } = useTimeout();

  return (
    <Section
      title=""
      description=""
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader2 />}
      {state && <DestinationCarousel2 data={destinations} />}
    </Section>
  );
}
