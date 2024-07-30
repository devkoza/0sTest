'use client';

import { tripData } from 'public/data/trip-details';
import { tripType } from 'public/data/trip-types';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AdvancedCheckbox from '@/components/ui/form-fields/advanced-checkbox';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { tripAtom, addtripAtom } from '@/components/add-trip/add-trip';
import Text from '@/components/ui/typography/text';
import AdvancedRadio from '@/components/ui/form-fields/advanced-radiobox';
import Checkbox from '@/components/ui/form-fields/checkbox';


const ActivitySchema = z.object({
  activity: z
    .string()
    .array()
    .min(1, { message: 'Minimum 1 items required!' }),
  tripType: z.string().min(1, { message: 'Trip type is required!' }),
});

type ActivitySchemaType = z.infer<typeof ActivitySchema>;

export default function AddActivity() {
  const setStep = useSetAtom(tripAtom);
  const [store, setStore] = useAtom(addtripAtom);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ActivitySchemaType>({
    defaultValues: {
      activity: store.activity,
      tripType: store.tripType,
    },
    resolver: zodResolver(ActivitySchema),
  });

  function handleActivity(data: ActivitySchemaType) {
    setStore({
      ...store,
      tripType: data.tripType,
    });
    console.log(data);
    setStep(3);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form noValidate onSubmit={handleSubmit((data) => handleActivity(data))}>
        <Text
          tag="h3"
          className="mb-4 mt-4 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          Where would you like to go?
        </Text>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {tripType.map((item) => (
            <AdvancedRadio
              key={item.name}
              value={item.name}
              className="card-gradient cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-blue-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('tripType')}
            >
              {/* <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div> */}
              <p className="mt-2 text-sm font-bold lg:text-base">{item.name}</p>
            </AdvancedRadio>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.tripType?.message}
        </FieldHelperText>

        <Text
          tag="h3"
          className="mb-6 mt-6 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          What would you like to do?
        </Text>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {tripData.activity.map((item, index) => (
            <AdvancedCheckbox
              key={`activity-${index}`}
              value={item.name}
              className="card-gradient w-full cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('activity')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-bold xl:text-base">
                {item.name}
              </p>
            </AdvancedCheckbox>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.activity?.message}
        </FieldHelperText>
        <CreateListingFooter 
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      </form>
    </div>
  );
}
