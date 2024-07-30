'use client';

import { packageType } from 'public/data/package-type';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { tripAtom, addtripAtom } from '@/components/add-trip/add-trip';
import AdvancedRadio from '@/components/ui/form-fields/advanced-radiobox';
import Text from '@/components/ui/typography/text';
import Counter from '@/components/ui/counter';


const TripSchema = z.object({
  tripName: z
    .string()
    .min(1, { message: 'This field is required!' })
    .max(24, { message: 'Reached your letter limit.' }),
  tripType: z.string().min(1, { message: 'This field is required!' }),
  pricePerDay: z.number().min(10, { message: 'Minimum price 10!' }),
  tripDescription: z
    .string()
    .min(1, { message: 'This field is required!' })
    .max(450, { message: 'Reached your letter limit.' }),
  guests: z.number().min(1, { message: 'Minimum 1 guest required!' }),
  phoneNumber: z.string().min(1, { message: 'This field is required!' }),
});

type TripSchemaType = z.infer<typeof TripSchema>;


export default function TripInfo() {
  const setStep = useSetAtom(tripAtom);
  const [store, setStore] = useAtom(addtripAtom);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<TripSchemaType>({
    defaultValues: {
      tripName: store.tripName,
      tripType: store.tripType,
      pricePerDay: store.pricePerDay,
      tripDescription: store.tripDescription,
      guests: store.guests,
      phoneNumber: store.phoneNumber,
    },
    resolver: zodResolver(TripSchema),
  });

  function handleTripDetails(data: TripSchemaType) {
    setStore({
      ...store,
      tripName: data.tripName,
      tripType: data.tripType,
      pricePerDay: data.pricePerDay,
      tripDescription: data.tripDescription,
      guests: data.guests,
      phoneNumber: data.phoneNumber,
    });
    console.log(data);
    setStep(2);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form 
        noValidate 
        onSubmit={handleSubmit(handleTripDetails)}>



      <div className="w-full md:w-[448px] xl:w-[648px] mb-4 mt-4">
        

      </div>

        
      <div className="grid grid-cols-1 gap-2 lg:gap-3">
            <Controller
              name="guests"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                  <Text className="text-base !font-semibold">Guests</Text>
                  <Counter
                    count={value ? value : 0}
                    onCount={onChange}
                    countBy={1}
                    buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                  />
                </div>
              )}
            />

            <FieldHelperText className="text-xs font-normal text-red">
              {errors.guests?.message}
            </FieldHelperText>
          </div>


        

        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          Select a Package
        </Text>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {packageType.map((item) => (
            <AdvancedRadio
              key={item.name}
              value={item.name}
              className="card-gradient cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('tripType')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-bold lg:text-base">{item.name}</p>
            </AdvancedRadio>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.tripType?.message}
        </FieldHelperText>

  

        <CreateListingFooter 
        
        onBack={() => setStep(2)}
        onNext={() => setStep(3)}

        />
      </form>
    </div>
  );
}
