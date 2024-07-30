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
  snorkeling: z.boolean().optional(),
  fishing: z.boolean().optional(),
  scubadiving: z.boolean().optional(),
  watersports: z.boolean().optional(),

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

const AddBoatForm = ({ boat }: AddBoatFormProps) => {
  const [image, setImage] = useState<string | undefined>()
  const [imageIsDeleting, setImageIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

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
        snorkeling: false,
        fishing: false,
        scubadiving: false,
        watersports: false,
        

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
          <h3 className="text-3xl font-semibold">Register your boat</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="boatName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold ">Boat Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="Sea Cruiser" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}     

                  />

                  <FormField
                    control={form.control}
                    name="boatDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Boat Description *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your boat description" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}               
                  />
                  <div>
                    <FormLabel className="font-bold">Choose Location</FormLabel>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <FormField
                          control={form.control}
                          name="diani"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Diani</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                        <FormField
                          control={form.control}
                          name="malindi"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Malindi</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                        <FormField
                          control={form.control}
                          name="watamu"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Watamu</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                        <FormField
                          control={form.control}
                          name="kilifi"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Kilifi</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                        <FormField
                          control={form.control}
                          name="mtwapa"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Mtwapa</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                        <FormField
                          control={form.control}
                          name="mombasa"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  
                            </FormControl>
                            <FormLabel>Mombasa</FormLabel>
                            </FormItem>
                          )}                                 
                        />
                      
                  </div>
                </div>
                <div>
                  <FormLabel className="font-bold">Choose Type</FormLabel>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <FormField
                        control={form.control}
                        name="private"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Private</FormLabel>
                          </FormItem>
                        )}                                 
                      />
                      <FormField
                        control={form.control}
                        name="shared"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Shared</FormLabel>
                          </FormItem>
                        )}                                 
                      />                  
                  </div>
                </div>
                <div>
                  <FormLabel className="font-bold">Choose Activity</FormLabel>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <FormField
                        control={form.control}
                        name="snorkeling"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Snorkeling</FormLabel>
                          </FormItem>
                        )}                                 
                      />
                      <FormField
                        control={form.control}
                        name="watersports"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Water Sports</FormLabel>
                          </FormItem>
                        )}                                 
                      />
                      <FormField
                        control={form.control}
                        name="scubadiving"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Scuba Diving</FormLabel>
                          </FormItem>
                        )}                                 
                      />   
                      <FormField
                        control={form.control}
                        name="fishing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                
                          </FormControl>
                          <FormLabel>Fishing</FormLabel>
                          </FormItem>
                        )}                                 
                      />                 
                  </div>
                </div>

                  <Dialog >
                    <DialogTrigger>
                      <Button type="button" className="w-full "><Plus className="mr-2 h-6 w-6"/>
                      
                      Add Boat Features</Button>
                      </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        {/* <DialogDescription>
                          Add activities available for your boat
                        </DialogDescription> */}
                      </DialogHeader>
                      <AddActivityForm />
                    </DialogContent>
                  </Dialog>            



                <FormField
                control={form.control}
                name='image'
                render={({field}) =>(
                  <FormItem className="flex flex-col space-y-3">
                    <FormLabel className="font-bold">Upload Boat Image *</FormLabel>
                    <FormDescription>Choose an image that will showcase your boat</FormDescription>
                    <FormControl>
                      {image ? <>
                      <div className="relative max-w-[400px] min-w-[200px] max-h-[400px] min-h-[200px] mt-4">
                        <Image fill src={image} alt="Boat Image" className="object-contain"/>
                        <Button onClick={() => handleImageDelete(image)} type="button" size="DEFAULT" variant="flat" className="absolute right-[-12px] top-0">
                              {imageIsDeleting ? <Loader2/> : <XCircle/>}

                            </Button>

                      </div>
                      
                      </> : <>
                      <div className="flex flex-col items-center max-w[400px] p-10 border-2 border-dashed border-primary/50 rounded mt-8">
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              console.log("Files: ", res);
                              setImage(res[0].url)
                              toast ({
                                variant: 'success',
                                description: 'Upload Completed'
                              })

                            }}
                            onUploadError={(error: Error) => {
                              toast ({
                                variant: 'destructive',
                                description: `ERROR! ${error.message}`
                              });
                            }}
                            
                            />


                      </div>  
                      
                      </>}

                      
                    </FormControl>


                  </FormItem>
                )}
                
                />
                <div className="flex justify-between gap-2 flex-wrap">
                  {boat ? <Button className="w-full" disabled={isLoading}>{isLoading ? <><Loader2 className="mr-2 h-4 w-4"/> Updating</> : <><PencilLine className="mr-2 h-4 w-4"/>Update</>}</Button> : <Button className="w-full" disabled={isLoading}>
                    {isLoading ? <><Loader2 className="mr-2 h-4 w-4"/> Creating</> : <><Pencil className="mr-2 h-4 w-4"/> Register Boat</>}                
                    </Button>}
                </div>
              </div>




            </div>
          </form>

        </Form>
        </div>
  );
}

export default AddBoatForm;

