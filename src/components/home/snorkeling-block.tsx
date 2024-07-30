'use client';

import { useTimeout } from '@/hooks/use-timeout';
import React from 'react';

import SnorkelingPhotoGallery from '../ui/drawers/snorkeling-photo-gallery';

export default function SnorkelingBlock() {
  const { state } = useTimeout();

  return (
    
    <section
    id="snorkeling"
     className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center        items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-lato text-blue-500">SNORKELING</p>
        <h1 className="mt-10 font-lato text-8xl max-sm:-[80] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-wrap relative z-10 pr-10">Dive into the </span>
          <br />
          <span className="text-blue-500 inline-block "> blue waters </span> of Kenya
        </h1>
        <p className=" flex  font-lato text-slate-gray text-xl leading-8 mt-6 mb-14 ">Snorkeling in Kenya is like embarking on a treasure hunt in a liquid paradise. Picture yourself gliding effortlessly over vibrant coral gardens, as curious fish dance around you in a rainbow of colors. With each breath, you'll discover a new marvel of marine life, from graceful sea turtles to playful dolphins!</p>


        <div>
          <SnorkelingPhotoGallery />
        </div>


      <div className="grid grid-rows-3 grid-flow-col gap-10 w-full font-lato text-slate-gray leading-8 ">
          <div className="font text-lato font-bold text-4xl row-span-3 ">
            Why go snorkeling in Kenya?
          </div>
          
          <div className="col-span-2 ">
            Snorkeling in Kenya isn't just an activity—it's an underwater odyssey waiting to unfold! Here, in the warm embrace of the Indian Ocean, every dip becomes a discovery. Imagine slipping into a liquid world where coral reefs are bursting with life, where schools of tropical fish flutter by in a rainbow ballet, and where majestic sea creatures glide past like mythical guardians of the deep.
            
          </div>
          
          <div className="row-span-2 mb-4 col-span-2 ">
            But Kenya offers more than just mesmerizing marine vistas; it's a gateway to unforgettable experiences. From the powdery white sands of Diani Beach to the remote beauty of Watamu Marine National Park, Kenya's coastline is a playground for snorkelers of all levels. So why snorkel in Kenya? Because here, beneath the waves, adventure and beauty converge, inviting you to dive in and discover the magic for yourself.

          </div>
        </div>




      </div>

   

    </section>


    
  )
  
}
