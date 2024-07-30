'use client';

import { atomWithStorage } from 'jotai/utils';
import { atom, useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';


const CreateTrip = dynamic(
  () => import('./steps/create-trip'),
);
const TripInfo = dynamic(
  () => import('./steps/trip-info'),
);
const AddActivity = dynamic(
  () => import('@/components/add-trip/steps/add-activity'),
);
const AddRequirement = dynamic(
  () => import('@/components/add-trip/steps/requirements'),
);

const TripsEnd = dynamic(
  () => import('@/components/add-trip/steps/trips-end'),
);

export const tripAtom = atom(1);
export const addtripAtom = atomWithStorage('addNewTrip', {
  tripName: '',
  requirementName: '',
  requirementType: '',
  requirementDescription: '',
  activity: [],
  tripType: '',
  pricePerDay: 10,
  tripDescription: '',
  guests: 1,
  location: '',
  phoneNumber: '',
  requirement: [],

});

export default function AddTrip() {
  let stepComponent;
  const step = useAtomValue(tripAtom);
  switch (step) {
    case 1:
      stepComponent = <CreateTrip />;
      break;
    case 2:
      stepComponent = <TripInfo />;
      break;
    case 3:
      stepComponent = <AddActivity />;
      break;
    case 4:
      stepComponent = <AddRequirement />;
      break;
    case 5:
      stepComponent = <TripsEnd />;
      break;
  }

  return (
    <div className="flex flex-grow items-center justify-center px-4 pb-24 pt-10">
      {stepComponent}
    </div>
  );
}
