'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import {Boat, Activity} from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Button from "../ui/button";


interface AddTripFormProps{
    trip?: Trip & {
        trips: Trip[]
    }
    trip?: Trip
    handleDialogueOpen: ({trip, handleDialogueOpen}:AddTripFormProps) => void
}

const formSchema = z.object({
 
    tripType: z.string().min(6, {
        message: "Type must be atleast 6 characters long"
    }),
    tripBudget: z.coerce.number().min(1, {message: 'Please add a budget'}),
    tripGuests: z.coerce.number().min(1, {message: 'Please add the number of guests'}),
    snorkeling: z.boolean().optional(),
    fishing: z.boolean().optional(),
    scubadiving: z.boolean().optional(),
    watersports: z.boolean().optional(),
    private: z.boolean().optional(),
    shared: z.boolean().optional(),
    driver: z.boolean().optional(),
    photographer: z.boolean().optional(),
    guide: z.boolean().optional(),
    diani: z.boolean().optional(),
    kilifi: z.boolean().optional(),
    malindi: z.boolean().optional(),
    mombasa: z.boolean().optional(),
    mtwapa: z.boolean().optional(),
    watamu: z.boolean().optional(),
    standard: z.boolean().optional(),
    luxury: z.boolean().optional(),
    

})

const TripForm = ({trip, handleDialogueOpen}:AddTripFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: trip || {

           
            snorkeling: false,
            tripGuests: 0,
            fishing: false,
            scubadiving: false,
            watersports: false,
            private: false,
            shared: false,
            driver: false,
            photographer: false,
            guide: false,
            tripBudget: 0,
            diani: false,
            kilifi: false,
            malindi: false,
            mombasa: false,
            mtwapa:  false,
            watamu: false,
            standard: false,
            luxury: false,

            
  
        }
    })
  return (
    <div className="max-h-[75vh] overflow-y-auto px-2">
        <Form {...form}>
            <form className="space-y-6">
            <h3 className="text-3xl font-semibold">Create Your Trip</h3>

                    <FormField
                            control={form.control}
                            name="tripBudget"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>What's your trip budget?</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={0} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                         <div>
                            <FormLabel className="font-bold text-lg">Select a Package</FormLabel>
                                <div className="grid grid-cols-2 gap-4 mt-2">

                                
                                    <FormField
                                    control={form.control}
                                    name="standard"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            
                                        </FormControl>
                                        <FormLabel>Standard</FormLabel>
                                        </FormItem>
                                    )}                                 
                                    />
                                    <FormField
                                    control={form.control}
                                    name="luxury"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            
                                        </FormControl>
                                        <FormLabel>Luxury</FormLabel>
                                        </FormItem>
                                    )}                                 
                                    />
                        </div>
                    
                    </div>

                        <FormField
                            control={form.control}
                            name="tripGuests"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Number of Guests</FormLabel>
                                    <FormControl>
                                        <Input placeholder="12" type="number" min={0} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        

                    <div>
                        <FormLabel className="font-bold text-lg">Where would you like to go?</FormLabel>
                            <div className="grid grid-cols-2 gap-4 mt-2">

                            
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
                               
                        </div>
                    
                    </div>
                    <div>
                        <FormLabel className="font-bold text-lg">What would you like to do?</FormLabel>
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
                               
                        </div>
                    
                    </div>
                    <div>
                            <FormLabel className="font-bold text-lg">Additional Requirements</FormLabel>
                                <div className="grid grid-cols-2 gap-4 mt-2">

                                
                                    <FormField
                                    control={form.control}
                                    name="driver"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            
                                        </FormControl>
                                        <FormLabel>Driver</FormLabel>
                                        </FormItem>
                                    )}                                 
                                    />
                                    <FormField
                                    control={form.control}
                                    name="photographer"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            
                                        </FormControl>
                                        <FormLabel>Photographer</FormLabel>
                                        </FormItem>
                                    )}                                 
                                    />
                                    <FormField
                                    control={form.control}
                                    name="guide"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            
                                        </FormControl>
                                        <FormLabel>Guide</FormLabel>
                                        </FormItem>
                                    )}                                 
                                    />
                        </div>
                    
                    </div>
                    
                    <div className="flex  justify-between gap-2 flex-wrap">
                  <Button className="w-full"> Create A Trip</Button>
                </div>
                






            </form>


        </Form>


    </div>
  )
}

export default TripForm;