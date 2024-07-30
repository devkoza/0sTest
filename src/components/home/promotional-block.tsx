'use client';

import Link from 'next/link';
import { Routes } from '@/config/routes';
import BannerBlock from '@/components/banner-block/banner-block';
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog";
import Button from "../ui/button";
import AddActivityForm from '../activity/AddActivityForm';
import TripForm from '../trip/TripForm';



export default function PromotionalBlock() {
  return (
    <BannerBlock
      bgImg="/images/banner/9.jpg"
      title="Select a package for your dream holiday"
      description="We offer set and custom packages for unforgettable experiences."
      className="from-black/10 to-black/60 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b md:before:rounded-2xl md:before:bg-gradient-to-r xl:before:hidden 4xl:!py-[120px]"
      contentWrapperClassName="m-auto md:ml-0 max-w-[450px] xl:max-w-[513px] px-8 py-9 md:px-0 md:py-0 flex flex-col justify-center md:justify-start z-10"
      titleClassName="mb-3"
      sectionClassName="4xl:!px-16"
      descriptionClassName="text-sm text-center md:text-left"
    >
      <div className='flex items-start justify-start space-x-3 p-3 space-y-3 w-auto'>
              <Dialog>
                    <DialogTrigger>
                      <Button type="button" className="font-bold  bg-white text-slate-950 ">
                      
                      Create A Trip</Button>
                      </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        {/* <DialogDescription>
                          Add activities available for your boat
                        </DialogDescription> */}
                      </DialogHeader>
                      <TripForm />
                    </DialogContent>
                  </Dialog>    
        
      </div>
         
    </BannerBlock>
  );
}
