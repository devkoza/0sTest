'use client'
import { UploadButton } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { Boat, Activity } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import Button from "../ui/button";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import { Loader2, Pencil, PencilLine, XCircle } from "lucide-react";
import axios from "axios";
import useLocation from "@/hooks/use-location";
import { ICity, IState } from "country-state-city";
import { useRouter } from "next/navigation";
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog";
import {Plus} from "lucide-react";
import AddActivityForm from "../activity/AddActivityForm";
import TripForm from "./TripForm";






interface AddBoatFormProps {
  boat: BoatWithActivities | null
}

export type BoatWithActivities = Boat & {
  activities: Boat[]
}

const formschema = z.object({

  boatName: z.string().min(3, {
    message: "Name must be atlease 3 characters long"
  }),
  boatDescription: z.string().min(10, {
    message: "Description must be atlease 10 characters long"
  }),
  boatRegistration: z.string().min(10, {
    message: "Description must be atlease 10 characters long"
  }),
  boatLicense: z.boolean().optional(),
  captainLicense: z.boolean().optional(),
  boatClass: z.string().optional(),
  boatMake: z.string().optional(),
  boatModel:z.string().optional(),
  boatYear: z.string().optional(),
  image: z.string().min(1, {
    message: "Image is Required"
  }),
  location:  z.string().min(1, {
    message: "Captain License is Required"
  }),
  boatType: z.string().optional(),
  boatLength: z.string().optional(),
  boatWidth: z.string().optional(),
  boatHeight: z.string().optional(),
  boatGuests: z.string().optional(),
  boatPrice: z.string().optional(),

  diani: z.boolean().optional(),
  malindi: z.boolean().optional(),
  watamu: z.boolean().optional(),
  kilifi: z.boolean().optional(),
  mtwapa: z.boolean().optional(),
  mombasa: z.boolean().optional(),

  private: z.boolean().optional(),
  shared: z.boolean().optional(),
  wifi: z.boolean().optional(),
  crew: z.boolean().optional(),
  food: z.boolean().optional(),
  drinks: z.boolean().optional(),
  gps: z.boolean().optional(),
  radio: z.boolean().optional(),
  lifeJackets: z.boolean().optional(),
  equipment: z.boolean().optional(),
})

const AddTripForm = ({ boat }: AddBoatFormProps) => {
  const [image, setImage] = useState<string | undefined>()
  const [imageIsDeleting, setImageIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const {toast} = useToast()
  const router = useRouter()



  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
       
        boatName: '',
        boatDescription: '',
        boatRegistration: '',
        boatClass: '',
        boatMake: '',
        boatModel: '',
        boatYear: '',
        image: '',
        location: '',
        boatType: '',
        boatLength: '',
        boatWidth: '',
        boatHeight: '',
        boatGuests: '',
        boatPrice: '',
        boatLicense: false,
        captainLicense: false,
        wifi: false,
        crew: false,
        food: false,
        drinks: false,
        gps: false,
        radio: false,
        lifeJackets: false,
        equipment: false,
        diani: false,
        malindi: false,
        watamu: false,
        kilifi: false,
        mtwapa: false,
        mombasa: false,
        private: false,
        shared: false,
        

    },
  })

  // useEffect(() => {
  //   const selectedCountry = form.watch('country')
  //   const countryStates = getCountryStates(selectedCountry)
  //   if (countryStates) {
  //     setStates(countryStates)
  //   }
  // }, [form.watch('country')])

  // useEffect(() => {
  //   const selectedCountry = form.watch('country')
  //   const selectedCities = form.watch('state')
  //   const countryStates = getCountryStates(selectedCountry, selectedState)
  //   if (stateCities) {
  //     setCities(stateCities)
  //   }
  // }, [form.watch('country'), form.watch('state')])

  function onSubmit(values: z.infer<typeof formschema>) {
    setIsLoading(true)
    if(boat){
      // update
    } else {
      axios.post('api/hotel', values).then((res) => {
        toast({
          variant: "success",
          description: "Boat Registered!"
        })
        router.push(`/boat/${res.data.id}`)
        setIsLoading(false)
      })
    }


  }

  const handleImageDelete = (image: string) => {
    setImageIsDeleting(true)
    const imageKey = image.substring(image.lastIndexOf('/') + 1)

    axios.post('/api/uploadthing/delete',{imageKey}).then((res) => {
      if(res.data.success){
        setImage('');
        toast({
          variant: 'success',
          description: 'Image Removed'

        })
      }
    }).catch(() =>{
      toast({
        variant: 'destructive',
        description: 'Something went wrong'
      })
    }).finally(() => {
      setImageIsDeleting(false)
    })
    
  }

  const handleDialogueOpen = () => {
    
  }

    return (<div className="container mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-3xl font-semibold">Create Your Trip</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-6">

                  <Dialog>
                    <DialogTrigger>
                      <p>Custom Packages</p>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                      </DialogHeader>
                      <TripForm />
                    </DialogContent>
                  </Dialog>            



 
                
              </div>



            </div>
          </form>

        </Form>
        </div>
  );
}

export default AddTripForm;

