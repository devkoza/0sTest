'use client';

import Text from '@/components/ui/typography/text';

const data = [
  {
    title: 'Phone No',
    subtitle: '+254 700 000 000',
  },
  {
    title: 'Email',
    subtitle: 'hello@email.com',
  },
  {
    title: 'Address',
    subtitle: 'Mombasa, Kenya',
  },
];

export default function DirectContactCard() {
  return (
    <div className="pt-8">
      <ul className="rounded-lg bg-gray-lightest px-10 py-10 xl:rounded-xl">
        {data.map((item) => (
          <li key={item.title} className="pt-10 first:pt-0">
            <Text tag="h5" className="">
              {item.title}
            </Text>
            <Text className="mt-2 !text-gray">{item.subtitle}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
