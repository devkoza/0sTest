'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { DestinationTypes2 } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import DestinationCard2 from '@/components/ui/cards/destination';
import ActionIcon from '@/components/ui/action-icon';

export default function DestinationCarousel2({ data }: any) {
  return (
    <div className="group-section relative h-custom-half">
      <Swiper
        loop={true}
        modules={[Navigation]}
        autoplay={false}
        slidesPerView={8}
        spaceBetween={12}
        navigation={{
          nextEl: '.destination-button-next',
          prevEl: '.destination-button-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.6 },
          580: { slidesPerView: 1.6, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          840: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 8, spaceBetween: 20 },
        }}
      >
        {data?.map((item: DestinationTypes2, index: number) => (
          <SwiperSlide key={`destination-${index}`} className="h-custom-half">
            <DestinationCard2
              slug={item.slug}
              name={item.name}
              location={item.location}
              thumbnail={item.thumbnail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-prev invisible absolute left-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <ChevronLeftIcon className="h-auto w-5" />
      </ActionIcon>
      <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-next invisible absolute right-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-4 sm:group-hover/section:right-6 lg:group-hover/section:-right-[19px]"
      >
        <ChevronRightIcon className="h-auto w-5" />
      </ActionIcon>
    </div>
  );
}
