'use client';

import { newBoats } from 'public/data/new-boats';
import { useTimeout } from '@/hooks/use-timeout';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';
import ListingCardNew from '../ui/cards/listing-new';
import ListingCardLoaderNew from '../ui/loader/listing-card-loader-new';

function NewBoatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10 mb-16">
      {newBoats.slice(0, 4).map((item, index: number) => (
        <ListingCardNew
          key={`new-boat-${index}`}
          id={`new-boat-${index}`}s
          slides={item.thumbnail}
          time={item.time}
          caption={item.caption}
          title={item.title}
          slug={item.slug}
          location={item.location}
          price={item.price}
          ratingCount={item.ratingCount}
          rating={item.rating}
          user={item.user}
        />
      ))}
    </div>
  );
}

export default function NewBoats() {
  const { state } = useTimeout();

  return (
    <Section
      className="container-fluid mt-12 overflow-hidden lg:mt-16"
      title="Top Boats"
      description=""
      headerClassName="items-end mb-4 lg:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoaderNew />}
      {state && <NewBoatsGrid />}
    </Section>
  );
}
