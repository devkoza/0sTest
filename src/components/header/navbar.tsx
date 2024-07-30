'use client'

import { UserButton } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TripForm from "../trip/TripForm";

const NavBar = () => {
  return (
    <div className="sticky top-0 border border-b-primar/10 bg-transparent">
      <Dialog >
                  <DialogTrigger> <p className='mr-6'>Custom Packages</p> </DialogTrigger>

                  <DialogContent> <TripForm /> </DialogContent>
              </Dialog> 
    </div>
  )
}

export default NavBar;