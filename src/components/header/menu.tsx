'use client';

import Link from 'next/link';
import useAuth from '@/hooks/use-auth';
import { Routes } from '@/config/routes';
import ProfileMenu from '@/components/header/profile-menu';
import { useModal } from '@/components/modals/context';
import { useIsMounted } from '@/hooks/use-is-mounted';
import Button from '@/components/ui/button';
import router from 'next/router';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TripForm from '../trip/TripForm';



const menuItems = [

  {
    id: 1,
    label: 'About',
    path: Routes.public.about,
  },
  {
    id: 2,
    label: 'Register your Boat',
    path: Routes.public.boat,
  },
];

export default function Menu() {
  const { isAuthorized } = useAuth();
  const mounted = useIsMounted();
  

  return (
    <nav className="primary-nav hidden items-center justify-between md:flex">
      <ul className="hidden flex-wrap md:flex">
        
                  
        {menuItems.map((item) => {
          if (!item.path) {
            console.error('Menu item is missing path:', item);
          }
          return (
            <li key={item.id}>
              <Link href={item.path || '#'} className="px-5 capitalize text-white">
                {item.label}
                
              </Link>
              
              
            </li>
            
            
          );
        })}
        
      </ul>
      <Dialog >
                  <DialogTrigger> <p className='mr-6'>Custom Packages</p> </DialogTrigger>

                  <DialogContent> <TripForm /> </DialogContent>
              </Dialog> 
      
      {mounted ? (
        <>
          {isAuthorized ? (
            <div className="ml-7 flex justify-end">
              <ProfileMenu className="hidden md:block" />
            </div>
          ) : (
            <Link
              href={Routes.auth.signIn}
              
              className="m-auto inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-orange-600 hover:!text-white md:ml-0 md:text-base"
            >
              Login
            </Link>
                )}
        </>
      ) : null}
                     
    </nav>
  );
}
