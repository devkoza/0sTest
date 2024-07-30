'use client';

import { oactivities } from 'public/data/oactivities';
import { useTimeout } from '@/hooks/use-timeout';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';
import ActivityCarousel from './activity-carausel';

export default function ActivityBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Activities"
      description=""
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <ActivityCarousel data={oactivities} />}
    </Section>
  );
}
