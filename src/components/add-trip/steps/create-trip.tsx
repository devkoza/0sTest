'use client';

import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useRouter } from 'next/navigation';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { tripAtom, addtripAtom } from '@/components/add-trip/add-trip';
import Text from '@/components/ui/typography/text';
import { SearchIcon } from '@/components/icons/search-icon';

export default function CreateTrip() {
  const router = useRouter();
  const setStep = useSetAtom(tripAtom);
  const setStore = useSetAtom(addtripAtom);
  return (
    <>
      <div className="w-full md:w-[548px] xl:w-[648px]">
        <Text tag="h2" className="text-xl md:!text-2xl 2xl:!text-3xl">
          Create a trip
        </Text>
        <div>
          <div
            onClick={() => {
              setStore(RESET);
              setStep(2);
            }}
            className="card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-xl 2xl:rounded-lg 2xl:p-12"
          >
            <SearchIcon className="h-auto w-8" />
            Start your trip
          </div>
          
        </div>
      </div>
      <CreateListingFooter onBack={router.back} onNext={() => setStep(2)} />
    </>
  );
}
