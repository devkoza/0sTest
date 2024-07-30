'use client';

import { scubaData } from 'public/data/activities';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { drawerStateAtom } from '@/components/drawers/view';
import { useGallery } from '@/components/gallery/context';
import { useModal } from '@/components/modals/context';


export default function ScubaPhotoGallery() {
  const { gallery } = scubaData;
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  const { openModal } = useModal();
  const { openGallery } = useGallery();

  return (

      <div className="m-auto w-full max-w-4xl px-4 py-4 pb-20 sm:py-6 md:py-10 lg:px-0 lg:py-16">
        <div className="mt-6 columns-3 gap-x-2 lg:gap-x-3">
          {gallery.map((item, index) => (
            <div
              className="group relative mb-2 cursor-pointer overflow-hidden rounded-md transition-all duration-300 md:rounded-xl lg:mb-3"
              key={`gallery-img-${index}`}
              onClick={() => openGallery('MODAL_GALLERY', index)}
            >
              <Image
                src={item}
                alt="gallery-img"
                fill
                className="!static object-cover"
              />
              <span className="absolute left-0 top-0 z-10 h-full w-full bg-gray-dark opacity-0 transition-all duration-200 group-hover:opacity-10"></span>
            </div>
          ))}
        </div>
      </div>
  );
}
