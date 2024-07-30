'use client';

import { useTimeout } from '@/hooks/use-timeout';
import React from 'react';

import ScubaPhotoGallery from '../ui/drawers/scuba-photo-gallery';

export default function ScubaBlock() {
  const { state } = useTimeout();

  return (
    
    <section
    id="scuba"
     className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center        items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-lato text-blue-500">SCUBA DIVING</p>
        <h1 className="mt-10 font-lato text-7xl max-sm:-[80] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-wrap relative z-10 pr-10">Explore the mesmerizing underwater</span>
          <br />
          <span className="inline-block "> world of Kenya's coastal treasures </span>
        </h1>
        <p className=" flex  font-lato text-slate-gray text-xl leading-8 mt-6 mb-14 ">Embark on an adventure like no other as you dive into crystal-clear waters teeming with vibrant coral reefs, exotic marine life, and surreal experiences. Select the ideal boat for you, we cater to divers of all levels, from beginners seeking their first underwater encounter to seasoned adventurers craving adrenaline-fueled drift dives. Guided by experienced instructors and accompanied by top-notch equipment, every dive promises an unforgettable journey into the heart of the Indian Ocean's biodiversity.</p>


        <div>
          <ScubaPhotoGallery />
        </div>


      <div className="grid grid-rows-3 grid-flow-col gap-10 w-full font-lato text-slate-gray leading-8 ">
          
          <div className="col-span-2 ">
            Whether you're captivated by the kaleidoscopic colors of coral gardens or the thrill of encountering majestic marine creatures like dolphins, turtles, and reef sharks, our scuba diving tours offer an unparalleled opportunity to explore the enchanting depths of Kenya's coastal paradise. Book your dive today and embark on a remarkable aquatic adventure that will leave you breathless in more ways than one. Each boat listed, is vetted and need to submit all necessary documents before being accepted on our website. 
            
          </div>
          
          <div className="row-span-2 mb-4 col-span-2 ">
            Each location across our coastline offers a unique underwater scenery. With inconsistent underwater structures, come with different ecosystems, snorkeling in Kenya offers divers a chance to experience unique experience at each destination along Kenya’s coastline. 

          </div>
        </div>




      </div>

   

    </section>


    
  )
  
}
