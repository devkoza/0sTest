'use client';

import { boatownerData } from 'public/data/boat-owner';
import Image from 'next/image';

import Text from '@/components/ui/typography/text';

export default function BoatownerProfileCard() {
  return (
    <div className="relative flex items-center justify-center px-4 text-center md:mt-8 md:h-[380px] md:justify-between md:overflow-hidden md:rounded-lg md:px-0 md:shadow-card lg:h-[410px] 2xl:mt-12 2xl:h-[460px]">
      <div className="z-10 mt-20 flex h-auto w-full max-w-[343px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-card md:mt-0 md:h-full md:rounded-none md:shadow-none 2xl:max-w-[537px]">
        <div className="relative inline-block h-[120px] w-[120px] overflow-hidden rounded-full lg:h-40 lg:w-40">
          <Image
            src={boatownerData.vendor.img}
            alt={boatownerData.vendor.name}
            fill
            priority
            sizes="(min-width: 320) 100vw, 100vw"
            className="h-full w-full object-cover"
          />boatowner   </div>
        <Text tag="h3" className="mt-5 text-lg">
          Hi, I’m {boatownerData.vendor.name}
        </Text>
        <Text className="mt-2 !text-gray">{boatownerData.vendor.username}</Text>
        <a
          rel="noreferrer"
          href="https://instagram.com"
          className="relative mt-5 inline-flex items-center text-base font-normal"
        >
        {/* {Usernames} */}
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com"
          className="relative mt-2 inline-flex items-center text-base font-normal"
        >
        {/* {Usernames} */}

        </a>
      </div>
      <div className="absolute inset-0 h-80 md:relative md:h-full md:w-full">
        <Image
          src={boatownerData.vendor.coverImage}
          alt={boatownerData.vendor.name}
          fill
          sizes="(min-width: 320) 100vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
