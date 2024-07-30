import React from 'react'
import Image from 'next/image';



const AboutWatersports = () => {
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
        <h3 className='text-6xl pb-3 md:text-7xl font-bold'>Glide across the <span className='text-blue-600 font-extrabold'> shimmering waters </span> of the Indian Ocean</h3>
        
            <p className='text-lg py-6'>Experience an exhilarating world of water sports along the stunning coastline of Kenya with our diverse array of aquatic adventures. From the adrenaline rush of jet skiing to the tranquility of paddle boarding and the thrill of kite surfing, our selection of activities should cater to your every need. Glide across the shimmering waters of the Indian Ocean, soaking in the breathtaking coastal scenery and feeling the invigorating sea breeze against your skin. Boats listed are professionals and have plenty of experience in this field. </p>
            
        </div>
        
    </div>
  )
}

export default AboutWatersports