'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import Counter from '@/components/ui/counter';
import Button from '@/components/ui/button';

interface selectedProps {
  adults: number;
}

interface SelecBoxProps {
  className?: string;
  label?: string;
  defaultSelected: selectedProps;
  labelClassName?: string;
  onChange: ({}: selectedProps) => void;
}

export default function SelectBox({
  className,
  defaultSelected,
  onChange,
}: SelecBoxProps) {
  const [adults, setAdults] = useState(defaultSelected.adults);

  return (
    <div className={className}>
      <Listbox as="div">
        <div className="relative">
          <ListboxButton as="div">
            {({ open }) => (
              <button
                className={clsx(
                  'flex h-16 w-full cursor-pointer items-center justify-between rounded-lg border border-gray-lighter bg-white px-4 py-2.5 text-left uppercase text-gray-dark focus:outline-none xl:py-3',
                  open && 'border-gray-dark ring-[1px] ring-gray-900/20',
                )}
              >
                <span className="block">
                  {adults } <span className="ml-2">Guests</span>
                </span>
                <span
                  className={clsx(
                    'transition-transform duration-200',
                    open ? '-rotate-180' : 'rotate-0',
                  )}
                >
                  <ArrowDownIcon className="h-4 w-4 font-bold text-gray" />
                </span>
              </button>
            )}
          </ListboxButton>
          <ListboxOptions className="absolute left-0 mt-1 grid w-full grid-cols-1 gap-3 rounded-lg border border-gray-lighter bg-white p-6 text-base shadow-lg ring-1 ring-gray-lightest">
            <div className="flex w-full items-center justify-between">
              <div className="  text-sm xl:text-base">
                <h5 className="font-bold text-gray-dark">Adults</h5>
                <p className="font-normal text-gray xl:mt-1">Age 18+</p>
              </div>
              <Counter
                count={adults}
                countBy={1}
                onCount={(val) => setAdults(val)}
              />
            </div>
          
            
            <ListboxOption className="mt-4" value={0}>
              <Button
                variant="solid"
                className="w-full"
                onClick={() =>
                  onChange({
                    adults: adults,

                  })
                }
              >
                Apply
              </Button>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
