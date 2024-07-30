'use client';

import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';
import DestinationMasonry from './destination-masonry';
import DestinationMasonryGrid from './destination-masonry-2';
import Masonry from './masonry';

export default function MasonryBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Top Destinations"
      description="Unsatiable it considered invitation he traveling insensible."
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <Masonry data={destinations} />}
    </Section>
  );
}
