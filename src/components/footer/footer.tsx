'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Routes } from '@/config/routes';
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BsTiktok } from "react-icons/bs";




const menuItems = [
  {
    label: 'About Us',
    path: Routes.public.about,
  },

  
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
    
    >
      <div className={clsx('container-fluid mb-4', className)}>
        <div className="flex flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:border-t md:border-t-gray-lighter md:pt-6 lg:mb-8 lg:pt-8">
          <div className="order-2 pt-4 md:order-none md:pt-0 lg:shrink-0">
            <p className="text-center text-sm font-normal capitalize leading-6 text-gray-dark md:text-left 3xl:text-base">
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a
                href="https://oceansafaris.com"
                rel="noreferrer noopener"
                target="_blank"
                className="font-bold hover:underline"
              >
                Ocean Safaris.
              </a>{' '}
              All rights reserved
            </p>
          </div>
          <nav className="order-1 border-b border-gray-lighter pb-4 md:order-none md:border-b-0 md:pb-0">
            <ul className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="px-4 first:pl-0 last:pr-0 lg:px-6"
                >
                  <Link
                    href={item.path}
                    className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
        
                <FaInstagram size={25} style={{ fill: 'black' }}  />
              <RiFacebookBoxLine size={25} style={{ fill: 'black' }} />
              <BsTiktok size={20} style={{ fill: 'black' }} />
              
            </ul>

          </nav>
        </div>
      </div>
    </footer>
  );
}
