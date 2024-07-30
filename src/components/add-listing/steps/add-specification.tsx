'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useAtom, useSetAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';


const EquipmentSchema = z
  .object({
    engine: z.string(),
    engineTorque: z.string(),
    fuelSystem: z.string(),
    boreStroke: z.string(),
    infotainmentSystem: z.string(),
    displacement: z.string(),
    fuelCapacity: z.string(),
    compressionRatio: z.string(),
    luggageCapacity: z.string(),
    fuelEconomy: z.string(),
    weight: z.string(),
  })
  .optional();

type EquipmentSchemaType = z.infer<typeof EquipmentSchema>;

export default function AddSpecification() {
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);
  const {
    handleSubmit,
    register,
    formState: { errors },
    // @ts-ignore
  } = useForm<EquipmentSchemaType>({
    resolver: zodResolver(EquipmentSchema),
  });

  function handleSpecification(data: any) {
    setStore({
      ...store,
      specification: data,
    });
    console.log(data);
    setStep(6);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form
        noValidate
        onSubmit={handleSubmit((data) => handleSpecification(data))}
      >
        <Text
          tag="h3"
          className="mb-4 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
          >
            Now, set your boat specifications
          </Text>
          <div className="grid grid-cols-1 gap-4">
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Hull Type
              </Text>
              <Input
                type="text"
                placeholder="Viking 37 ft"
                inputClassName="!h-10 lg:!h-12"
                {...register('engine')}
                error={errors?.engine?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Length
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('engineTorque')}
                error={errors?.engineTorque?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Width
              </Text>
              <Input
                type="text"
                placeholder="Width"
                inputClassName="!h-10 lg:!h-12"
                {...register('fuelSystem')}
                error={errors?.fuelSystem?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Type of engine
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('boreStroke')}
                error={errors?.boreStroke?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Max number of people
              </Text>
              <Input
                type="text"
                placeholder="12"
                inputClassName="!h-10 lg:!h-12"
                {...register('infotainmentSystem')}
                error={errors?.infotainmentSystem?.message}
              />
            </div>
           
          </div>
          <CreateListingFooter onBack={() => setStep(4)} />
        </form>

      
    </div>
  );
}