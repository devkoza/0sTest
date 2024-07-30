'use client';

import { DestinationTypes } from '@/types';
import DestinationCard from '@/components/ui/cards/destination';

export default function DestinationMasonry({ data }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {data?.map((item: DestinationTypes, index: number) => (
        <DestinationCard
          key={`destinaion-${index}`}
          slug={item.slug}
          name={item.name}
          location={item.location}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
}
