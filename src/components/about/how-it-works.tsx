import { CheckIcon } from "@heroicons/react/20/solid"
import Button from "../ui/button"
import Link from "next/link"
import { Routes } from "@/config/routes"


export default function HowitWorks() {
  return (
    <>
    
        <div className="max-w-[1700px] h-auto mx-auto my-8  pt-4 lg:mb-[5%] md:mb-[10%] px-6 grid lg:grid-cols-2 gap-10">

        
          <div className=" lg:top-1 relative lg:col-span-1 col-span-2 w-full h-auto p-6 shadow-sm py-10 border border-slate-200 rounded-xl">
            
            <h1 className="font-bold text-2xl mb-6 text-gray-dark">
              Rent a boat
            </h1>
            <ul className="font-medium leading-10">
            <li className="flex justify-start items-center space-x-1.5 p-1.5"><CheckIcon className="w-5 -h-5 "/><span className="font-bold text-lg">Select your destination</span></li>
              <li className="text-md px-10"> Explore The Different Destinations Along Kenya’s Beautiful Coastline, Each Location Offers a Variety of Different Excursions.</li>
              <li className="flex justify-start items-center space-x-1.5 p-1.5"><CheckIcon className="w-5 -h-5"/><span className="font-bold text-lg">Select your ideal Boat</span></li>
              <li className="text-md px-10">Browse Our Variety of Boats and Activities and Select the One That Appeals to You the Most.</li>
              <li className="flex justify-start items-center space-x-1.5 p-1.5"><CheckIcon className="w-5 -h-5"/><span className="font-bold text-lg">Book/Request Booking</span></li>
              <li className="text-md px-10">Depending on availability, some boats will have “Request a booking”. Once you have filled the form you will get a response within 48HRs.</li>
              <li className="flex justify-start items-center space-x-1.5 p-1.5"><CheckIcon className="w-5 -h-5"/><span className="font-bold text-lg">Confirmation</span></li>
              <li className="text-md px-10 mb-44">Once The Booking Has Been Processed, You Will Receive an Email Confirmation. Contacts Of Boat Owners Will Be Given to You 48hrs Before Excursion.</li>
          </ul>
  
            <Link
                href={Routes.public.explore}
                
                className="m-auto w-full justify-end inline-block rounded-xl bg-blue-600 px-8 py-4  text-center text-sm font-semibold text-white transition duration-150 hover:bg-orange-600 hover:!text-white md:ml-0 md:text-base"
              >
                Rent a Boat
            </Link>
            
          </div>
          <div className="lg:top-1 relative lg:col-span-1 col-span-2 w-full h-auto p-6 shadow-sm py-10 border border-slate-200 rounded-xl">
            
            <h1 className="font-bold text-2xl mb-6 text-gray-dark">
              Register your Boat
            </h1>
            <ul className="font-medium leading-10">
            <li className="flex justify-start items-center space-x-1.5 p-1.5">
              <CheckIcon className="w-5 -h-5" /><span className="font-bold text-lg">Create an account</span></li>
              <li className="text-md px-10"> Open a free account and fill in the necessary details.</li>
            <li className="flex justify-start items-center space-x-1.5 p-1.5">
              <CheckIcon className="w-5 -h-5" /><span className="font-bold text-lg"> Fill in the form</span></li>
              <li className="text-md px-10">This form will enable us to create your profile and your back end dashboard where you can track all your bookings.</li>
            <li className="flex justify-start items-center space-x-1.5 p-1.5">
              <CheckIcon className="w-5 -h-5" /><span className="font-bold text-lg">Submit your Photos</span>
            </li>
              <li className="text-md px-10">We will require you to upload images that best depict your boat inside and out. If the images do not meet our standard, we will arrange for a photographer to come.</li>
            <li className="flex justify-start items-center space-x-1.5 p-1.5">
              <CheckIcon className="w-5 -h-5" /><span className="font-bold text-lg">Submit necessary Licenses</span>
            </li>
            <li className="text-md px-10">As part of our rules and regulations all boats must have all the required documents depending on the activity that your boat offers. Once submitted our team will double check the information before accepting you on our platform (this may take 3-5 business days).
              
              </li>
            <li className="flex justify-start items-center space-x-1.5 p-1.5">
              <CheckIcon className="w-5 -h-5" /><span className="font-bold text-lg">Enjoy easy access to potential clients</span>
              </li>
              <li className="text-md px-10">Once everything is checked, you will now be able to use Ocean Safaris services giving you a comprehensive overview of all bookings coming from the platform.</li>
            </ul>

            
            <Link
                href={Routes.public.addListing}
                
                className="m-auto w-full mt-4 inline-block rounded-xl bg-blue-600 px-8 py-4  text-center text-sm font-semibold text-white transition duration-150 hover:bg-orange-600 hover:!text-white md:ml-0 md:text-base"
              >
                Register your boat
              </Link>
          </div>      
      </div>
      
  </>
  )
}