'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@/components/icons/chevronRight';
import { ChevronLeftIcon } from '@/components/icons/chevronLeft';
import { Swiper, SwiperSlide, Navigation, Pagination } from '@/components/ui/slider';
import AddToWishlist from '@/components/add-to-wishlist';
import ActionIcon from '@/components/ui/action-icon';
import Rate from '@/components/ui/rating';
import { Routes } from '@/config/routes';
import { ListingItemTypes } from '@/types';

export default function ListingCard({
  id,
  slides,
  caption,
  title,
  activity,
  slug,
  location,
  rating,
  ratingCount,
}: ListingItemTypes) {
  return (
    <>
      <div className="listing-card group/item relative inline-flex w-full flex-col">
        <div className="relative w-full overflow-hidden rounded-xl">
          
          <Link href={Routes.public.listingDetails(slug)}>
            <div className="listing-item after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-1/4 after:w-full after:bg-gradient-to-t after:from-black/25">
              <Swiper
                className="!static"
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                navigation={{
                  nextEl: `.${id}-listing-item-button-next`,
                  prevEl: `.${id}-listing-item-button-prev`,
                }}
              >
                {slides?.map((slide, index) => (
                  <SwiperSlide key={`slide-${index}`}>
                    <Image
                      className="aspect-[34/25] bg-gray-lighter"
                      src={slide}
                      width={816}
                      height={600}
                      alt="boat"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ActionIcon
                rounded="full"
                color="light"
                size="sm"
                className={`absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 shadow-md !transition-all focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible ${id}-listing-item-button-prev`}
              >
                <ChevronLeftIcon className="-ml-0.5 h-auto w-[7px]" />
              </ActionIcon>
              <ActionIcon
                rounded="full"
                size="sm"
                color="light"
                className={`absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 opacity-80 shadow-md !transition-all duration-300 focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible md:group-hover/item:opacity-100 ${id}-listing-item-button-next`}
              >
                <ChevronRightIcon className="-mr-0.5 h-auto w-[7px]" />
              </ActionIcon>
            </div>
          </Link>
        </div>
        <Link href={Routes.public.listingDetails(title)}>
          <div className="content pt-3">
            <div className="mb-1 flex items-center gap-5">
              <span className="relative flex items-center font-bold text-gray-dark before:absolute before:-right-3 before:block before:h-1 before:w-1 before:rounded-full before:bg-gray-dark">
                {caption}
              </span>
              <span className="text-gray-light ml-auto">{location}</span>
            </div>
            <h4 className="text-ellipsis text-gray-dark 2xl:mb-1.5">{title}</h4>
            <div className="flex items-center gap-3 leading-7">
              <div className="flex-grow flex justify-end items-center gap-3">
                <Rate
                  allowHalf
                  allowClear
                  defaultValue={rating}
                  characterClassName="h-[14px] w-[14px] 3xl:h-[18px] 3xl:w-[18px]"
                />
                <span className="text-gray-light">({ratingCount})</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

ListingCard.propTypes = {
  id: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
};