'use client';

import { DestinationTypes } from '@/types';
import DestinationCard from '@/components/ui/cards/destination';
import Masonry from 'react-masonry-css';

export default function DestinationGrid({ data }: any) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {data?.map((item: DestinationTypes, index: number) => (
        <div key={`destination-${index}`} className="masonry-grid_column">
          <DestinationCard
            slug={item.slug}
            name={item.name}
            location={item.location}
            thumbnail={item.thumbnail}
          />
        </div>
      ))}
    </Masonry>
  );
}

