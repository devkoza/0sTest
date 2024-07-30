import React from 'react'
import Image from 'next/image';



const AboutSnorkeling = () => {
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
          className='row-span-2 object-cover w-full h-full rounded-2xl p-2 '
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
          
        <h3 className='text-6xl pb-3 md:text-7xl font-bold'>Explore one of the<span className='text-blue-600 font-extrabold'> richest marine life</span> in Africa</h3>
        
            <p className='text-lg py-6'>Picture yourself gliding effortlessly over vibrant coral gardens, as curious fish dance around you in a rainbow of colors. Whether you're a seasoned explorer or dipping your fins for the first time, Kenya's coastal charm and crystal-clear waters will leave you hooked! So, grab your mask, snorkel, and sense of adventure, and get ready to explore the aquatic wonders of Kenya like never before! Dive in, the fun awaits!</p>
            <h4 className='pb-4 text-2xl md:text-3xl font-bold'>Why go snorkeling in Kenya?</h4>
            <p className='pb-6 text-lg'>Kenya has one of the richest marine life on the African continent. Each destination along the coast offers a unique experience. From the powdery white sands of Diani Beach to the remote beauty of Watamu Marine National Park, Kenya's coastline is a playground for snorkelers of all levels. So why snorkel in Kenya? Because here, beneath the waves, adventure and beauty converge, inviting you to dive in and discover the magic for yourself.</p>

        </div>
        
    </div>
  )
}

export default AboutSnorkeling