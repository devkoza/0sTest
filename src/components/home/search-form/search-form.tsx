'use client';

import { useState, useEffect, useRef } from 'react';
import { format, addDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import { makeQueryString } from '@/utils/makeQueryString';
import DatePickerInput from '@/components/home/search-form/daterange-picker';
import LocationInput from '@/components/home/search-form/location-input';
import 'react-datepicker/dist/react-datepicker.css';
import SearchAutocomplete from '@/components/ui/search-autocomplete';
import { MapMarkerIcon } from '@/components/icons/map-marker';
import { CalenderIcon } from '@/components/icons/calender';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';

type QueryStringType = {
  location?: string;
  departureDate: string;
  returnDate: string;
};

export default function FindTripForm() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchBox, setSearchBox] = useState<any>();
  const [locationInput, setLocationInput] = useState<{
    searchedLocation: string;
    searchedPlaceAPIData: google.maps.places.PlaceResult[];
  }>({
    searchedLocation: '',
    searchedPlaceAPIData: [],
  });
  const locationInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (locationInputRef.current) {
      const options = {
        types: ['(cities)'],
        componentRestrictions: { country: 'ke' }
      };
      const autocomplete = new google.maps.places.Autocomplete(locationInputRef.current, options);
      setSearchBox(autocomplete);
      
      autocomplete.addListener('place_changed', () => {
        const places = autocomplete.getPlace();
        if (places) {
          setLocationInput({
            searchedLocation: places.formatted_address || '',
            searchedPlaceAPIData: places ? [places] : [],
          });
        }
      });
    }
  }, [locationInputRef.current]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const queryObj: QueryStringType = {
      location: locationInput.searchedLocation,
      departureDate: format(startDate, 'yyyy-MM-dd'),
      returnDate: format(endDate, 'yyyy-MM-dd'),
    };
    const queryString = makeQueryString(queryObj);
    router.push(`${Routes.public.explore}?${queryString}`);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative z-[2] w-[480px] h-auto max-w-[380px] rounded-lg bg-white p-6 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-8 sm:pt-9 xs:pt-8 xs:py-10 md:max-w-[380p md:shadow-none lg:rounded-xl xl:max-w-[380px] xl:p-9 4xl:max-w-[516px] 4xl:p-12"
    >
      <div className="mb-4 sm:mb-0">
        <span className="mb-3  text-2xl font-extrabold text-blue-700 leading-7 sm:block 4xl:text-[32px] 4xl:leading-[44px]">
          Ocean Safaris
        </span>
        <Text
          tag="h1"
          className="leading-12 mb-2 !text-xl !font-black titlecase text-gray-dark sm:!text-[28px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Your Guide Through <br className="hidden sm:block" />
          Kenyan Waters
        </Text>
        <Text className="mb-5 hidden leading-6 !text-secondary sm:block 3xl:leading-8 4xl:mb-6 4xl:text-lg">
        </Text>
      </div>
      <SearchAutocomplete
        onLoad={() => {}}
        onPlacesChanged={() => {}}
        loader={
          <LocationInput
            label="Loading . . ."
            icon={<MapMarkerIcon className="h-6 w-6 text-gray" />}
            className="mb-6"
            disabled
          />
        }
      >
        <LocationInput
          ref={locationInputRef}
          label="Where do you want to go?"
          icon={<MapMarkerIcon className="h-6 w-6 text-gray" />}
          className="mb-6"
          value={locationInput.searchedLocation || ''}
          onChange={(event) =>
          setLocationInput({
            ...locationInput,
            searchedLocation: event.target.value,
          })
          }
        />
      </SearchAutocomplete>
 
      <DatePickerInput
        label="Select Tripdate"
        selected={startDate}
        dateFormat="eee dd / LL / yy"
        icon={<CalenderIcon className="h-6 w-6 text-gray" />}
        onChange={(date: Date | null, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
          if (date) {
            setStartDate(date);
            setEndDate(addDays(date, 1));
          }
        }}
        onSelect={(date: Date | null, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
          // Handle onSelect if needed
        }}
        minDate={new Date()}
        containerClass="mb-6"
        popperClassName="homepage-datepicker"
        excludeScrollbar={true}
      />

      <Button
        type="submit"
        className="w-full !py-[16px] text-sm !font-bold titlecase leading-6 md:!py-[17px] md:text-base lg:!rounded-xl 3xl:!py-[22px]"
        rounded="lg"
        size="xl"
      >
        Search
      </Button>
    </form>
  );
}
