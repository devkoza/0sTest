
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Satisfy, Lato } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
});

export const metadata: Metadata = {
  title: 'Ocean Safaris',
  description: 'Find your boat with the best experience.',
  icons: ['/images/logo.svg'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
        <html lang="en" className={clsx('h-full font-lato antialiased', satisfy.variable,lato.variable,)} suppressHydrationWarning>
          <body className="flex min-h-full flex-col">
          
          <Toaster/>
          <main>
            {children}

          </main>
            
            
          </body>
      </html>

  );
}
