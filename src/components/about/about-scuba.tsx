import React from 'react'
import { Routes } from '@/config/routes';
import Link from 'next/link';
import Image from 'next/image';



const AboutScuba = () => {
  return (
      <div className='max-w-[1400px] m-auto py-24 px-4 grid lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-2 grid-rows-6 h-[60vh]'>
        <Image
          src="/images/destinations/malindi.jpg"
          className='row-span-3 object-cover w-full h-full rounded-2xl p-2'
          width={500}
          height={500}
          alt="malindi"
          />
          <Image
          src="/images/destinations/diani.jpg"
          className='row-span-2 object-cover w-full h-full rounded-2xl p-2'
          width={500}
          height={500}
          alt="diani"
          />
          <Image
          src="/images/destinations/wasini.jpg"
          className='row-span-2 object-cover w-full h-full rounded-2xl p-2'
          width={500}
          height={500}
          alt="wasini"
          />
          <Image
          src="/images/destinations/kilifi.jpg"
          className='row-span-3 object-cover w-full h-full rounded-2xl p-2'
          width={500}
          height={500}
          alt="kilifi"
          />
          <Image
          src="/images/destinations/mtwapa.jpg"
          className='row-span-2 object-cover w-full h-full rounded-2xl p-2'
          width={500}
          height={500}
          alt="mtwapa"
          />
          
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-6xl pb-3 md:text-7xl font-bold'>Explore the <span className='text-blue-600 font-extrabold'> Beauty Under </span> Kenya's Waves</h3>
            <p className='text-lg py-6'>Explore the beauty under Kenya’s waves. Embark on an adventure like no other as you dive into crystal-clear waters, teeming with vibrant coral reefs, exotic marine life, and surreal experiences. Select the ideal boat for you, guided by experienced instructors and accompanied by top-notch equipment, every dive promises an unforgettable journey into the heart of the Indian Ocean's biodiversity.</p>
            <h4 className='pb-4 text-2xl md:text-3xl font-bold'>Why go Scuba Diving in Kenya?</h4>
            <p className='pb-6 text-lg'>Each location across our coastline offers a unique underwater scenery. With inconsistent underwater structures, come with different ecosystems, scuba diving in Kenya offers divers a chance to experience unique experience at each destination along Kenya’s coastline.</p>

        </div>
        
    </div>
  )
}

export default AboutScuba