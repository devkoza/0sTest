'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { DestinationTypes2 } from '@/types';

export default function DestinationCard2({
  thumbnail,
  slug,
  name,
  location,
}: DestinationTypes2) {
  return (
    <Link
      href={slug}
      className="group/item relative flex aspect-auto h-[50px] w-100 flex-col overflow-hidden rounded-xl lg:h-[250px] 2xl:h-[200px] 4xl:h-[200px]"
    >
      <Image
        src={thumbnail}
        alt="destination2"
        fill
        sizes="(min-width: 320) 50vw, 50vw"
        className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110"
      />
      <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
      <div className="relative z-10 mt-auto px-3 pb-3 md:px-3 md:pb-7 3xl:px-3 3xl:pb-9 4xl:px-12 4xl:pb-12">
        <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">
          {name}
        </h3>
        <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">
          {location}
        </p>
      </div>
    </Link>
  );
}
