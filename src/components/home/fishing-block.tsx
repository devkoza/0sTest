'use client';

import { useTimeout } from '@/hooks/use-timeout';
import React from 'react';
import FishingPhotoGallery from '../ui/drawers/fishing-photo-gallery';


export default function FishingBlock() {
  const { state } = useTimeout();

  return (
    
    <section
    id="snorkeling"
     className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center        items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-lato text-blue-500">DEEP SEA FISHING</p>
        <h1 className="mt-10 font-lato text-8xl max-sm:-[80] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-wrap relative z-10 pr-10">Fish into the </span>
          <br />
          <span className="text-blue-500 inline-block "> blue waters </span> off the coast of Kenya
        </h1>
        <p className=" flex  font-lato text-slate-gray text-xl leading-8 mt-6 mb-14 ">Picture yourself on the deck of a sturdy boat, surrounded by the vast expanse of the Indian Ocean, with nothing but the sound of waves and the thrill of the catch. Our experienced guides know these waters like the back of their hands, taking you to the hottest fishing spots where the big game fish luck</p>


        <div>
          <FishingPhotoGallery />
        </div>


      <div className="grid grid-rows-3 grid-flow-col gap-10 w-full font-lato text-slate-gray leading-8 ">

          
          <div className="col-span-2 ">
            Say goodbye to one-size-fits-all experiences and hello to personalized adventures designed just for you. Through our unique survey system, we'll delve into your preferences, interests, and desires, crafting a bespoke itinerary that seamlessly blends the excitement of safari exploration with the thrill of deep-sea fishing. 
            
          </div>
          
          <div className="row-span-2 mb-4 col-span-2 ">
            Whether you dream of tracking the Big Five in the wild or reeling in trophy fish from the Indian Ocean, we'll curate an unforgettable journey that exceeds your expectations. Our expert team will be with you every step of the way, ensuring that every detail is perfectly tailored to your tastes. So why settle for ordinary when you can have extraordinary? Fill out our survey today and let us create a Safari and Fishing package that's as unique as you are. 
          </div>
        </div>




      </div>

   

    </section>


    
  )
  
}
