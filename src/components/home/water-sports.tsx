'use client';

import { useTimeout } from '@/hooks/use-timeout';
import React from 'react';

import WatersportsPhotoGallery from '../ui/drawers/snorkeling-photo-gallery';

export default function WatersportsBlock() {
  const { state } = useTimeout();

  return (
    
    <section
    id="watersports"
     className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center        items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-lato text-blue-500">WATER SPORTS</p>
        <h1 className="mt-10 font-lato text-7xl max-sm:-[80] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-wrap relative z-10 pr-10">Glide across the </span>
          <br />
          <span className="inline-block "> shimmering waters of the Indian Ocean </span>
        </h1>
        <p className=" flex  font-lato text-slate-gray text-xl leading-8 mt-6 mb-14 ">Experience an exhilarating world of water sports along the stunning coastline of Kenya with our diverse array of aquatic adventures. From the adrenaline rush of jet skiing to the tranquility of paddle boarding and the exploration of kayaking, our comprehensive selection caters to thrill-seekers and serenity-seekers alike. Glide across the shimmering waters of the Indian Ocean, soaking in the breathtaking coastal scenery and feeling the invigorating sea breeze against your skin. </p>


        <div>
          <WatersportsPhotoGallery />
        </div>


      <div className="grid grid-rows-3 grid-flow-col gap-10 w-full font-lato text-slate-gray leading-8 ">
          
          <div className="col-span-2 ">
            Dive into a world of endless possibilities with our custom adventure packages, combining thrilling water sports with a myriad of other exciting activities such as snorkeling, fishing, safaris, and more. Whether you crave the rush of jet skiing, the tranquility of paddle boarding, or the thrill of reeling in the catch of the day, our customizable packages allow you to mix and match your favorite experiences to create the perfect itinerary. 
            
          </div>
          
          <div className="row-span-2 mb-4 col-span-2 ">
            With options to fit every budget and preference, our expert team is dedicated to crafting a seamless and unforgettable journey tailored just for you. So why limit yourself to one adventure when you can have it all? Contact us today to design your dream vacation and make memories to last a lifetime. 
          </div>
        </div>




      </div>

   

    </section>


    
  )
  
}
