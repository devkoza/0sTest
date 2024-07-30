'use client';

import { DestinationTypes } from '@/types';
import Masonry from 'react-masonry-css';
import DestinationCard from '@/components/ui/cards/destination';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export default function DestinationMasonryGrid({ data }: any) {
  return (
    <div className="my-masonry-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map((item: DestinationTypes, index: number) => (
          <div key={`destination-${index}`} className="masonry-item">
            <DestinationCard
              slug={item.slug}
              name={item.name}
              location={item.location}
              thumbnail={item.thumbnail}
              className={`masonry-card masonry-card-${index % 5}`} // Add class to vary heights
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
