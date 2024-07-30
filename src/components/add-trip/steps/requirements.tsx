'use client';

import { requirementTypes } from 'public/data/requirements';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { tripAtom, addtripAtom } from '@/components/add-trip/add-trip';
import AdvancedRadio from '@/components/ui/form-fields/advanced-radiobox';
import Textarea from '@/components/ui/form-fields/textarea';
import SetPrice from '@/components/add-listing/set-price';
import Text from '@/components/ui/typography/text';
import Counter from '@/components/ui/counter';

const RequirementSchema = z.object({
  requirement: z
    .string()
    .min(1, { message: 'This field is required!' })
    .max(24, { message: 'Reached your letter limit.' }),
  requirementType: z.string().min(1, { message: 'This field is required!' }),
  pricePerDay: z.number().min(10, { message: 'Minimum price 10!' }),
  requirementDescription: z
    .string()
    .min(1, { message: 'This field is requred!' })
    .max(450, { message: 'Reached your letter limit.' }),

  guests: z.number().min(1, { message: 'Minimum 1 guest required!' }),
});

type RequirementSchemaType = z.infer<typeof RequirementSchema>;

export default function RequirementInfo() {
  const setStep = useSetAtom(tripAtom);
  const [store, setStore] = useAtom(addtripAtom);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<RequirementSchemaType>({
    defaultValues: {
      requirement: store.requirementName,
      requirementType: store.requirementType,
      pricePerDay: store.pricePerDay,
      requirementDescription: store.requirementDescription,

      guests: store.guests,
    },
    resolver: zodResolver(RequirementSchema),
  });

  function handleRequirementDetails(data: any) {
    setStore({
      ...store,
      requirementName: data.requirementName,
      requirementType: data.requirementType,
      pricePerDay: data.pricePerDay,
      requirementDescription: data.requirementDescription,

      guests: data.guests,
    });
    console.log(data);
    setStep(4);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form
        noValidate
        onSubmit={handleSubmit((data: any) => handleRequirementDetails(data))}
      >

        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          What else do you require?
        </Text>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {requirementTypes.map((item) => (
            <AdvancedRadio 
              key={item.name}
              value={item.name}
              className="card-gradient cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('requirementType')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4   text-sm font-bold lg:text-base">
                {item.name}
              </p>
            </AdvancedRadio>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.requirementType?.message}
        </FieldHelperText>

        <Textarea
          variant="outline"
          className="mt-12"
          label="Any other information you want us to consider"
          maxLength={450}
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          {...register('requirementDescription')}
          error={errors.requirementDescription?.message}
        />
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('requirementDescription')?.length ?? 0}
          /450
        </p>

        <CreateListingFooter 
        
        onBack={() => setStep(3)}
        onNext={() => setStep(5)}
        />
      </form>
    </div>
  );
}
 