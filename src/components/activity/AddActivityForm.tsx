'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import {Boat, Activity} from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Button from "../ui/button";
import {CheckCircle2} from "lucide-react";
import {PlusCircleIcon} from "lucide-react";
import { useState } from "react";


interface AddActivityFormProps{
    boat?: Boat & {
        activities: Activity[]
    }
    activity?: Activity
    handleDialogueOpen: ({boat, activity, handleDialogueOpen}:AddActivityFormProps) => void
}

const formSchema = z.object({
 
    boatType: z.string().min(6, {
        message: "Type must be atleast 6 characters long"
    }),
    boatLength: z.coerce.number().min(1, {message: 'Boat Length is required'}),
    boatWidth: z.coerce.number().min(1, {message: 'Boat Width is required'}),
    boatHeight: z.coerce.number().min(1, {message: 'Boat Height is required'}),
    boatGuests: z.coerce.number().min(1, {message: 'Boat Guests is required'}),
    boatPrice: z.coerce.number().min(1, {message: 'Boat Price is required'}),
    boatClass: z.string().optional(),
    boatMake: z.string().optional(),
    boatModel: z.string().optional(),
    boatYear: z.coerce.number().min(1, {message: 'Boat Price is required'}),
    snorkeling: z.boolean().optional(),
    fishing: z.boolean().optional(),
    scubadiving: z.boolean().optional(),
    watersports: z.boolean().optional(),
    marineParkFees: z.coerce.number().optional(),
    wifi: z.boolean().optional(),
    crew: z.boolean().optional(),
    food: z.boolean().optional(),
    drinks: z.boolean().optional(),
    gps: z.boolean().optional(),
    radio: z.boolean().optional(),
    lifeJackets: z.boolean().optional(),
    equipment: z.boolean().optional(),
    boatLicense: z.boolean().optional(),
    captainLicense: z.boolean().optional(),

})

const AddActivityForm = ({boat, activity, handleDialogueOpen}:AddActivityFormProps) => {
    const [open, setOpen] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: activity || {

            boatType: '',
            boatLength: 0,
            boatWidth: 0,
            boatHeight: 0,
            boatGuests: 0,
            boatPrice: 0,
            boatClass: '',
            boatMake: '',
            boatModel: '',
            boatYear: 0,
            snorkeling: false,
            fishing: false,
            scubadiving: false,
            watersports: false,
            marineParkFees: 0,
            wifi: false,
            crew: false,
            food: false,
            drinks: false,
            gps: false,
            radio: false,
            lifeJackets: false,
            equipment: false,
            boatLicense: false,
            captainLicense: false,
  
        }
    })
  return (
    <div className=" w-container max-h-[75vh] overflow-y-auto px-2">
        <Form {...form}>
            <form className="space-y-6">
                <FormField
                    control={form.control}
                    name="boatType"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="font-bold text-lg">Boat Type</FormLabel>
                            <FormControl>
                                <Input placeholder="Glass Bottom"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}              
                               
                />
                <FormField
                            control={form.control}
                            name="boatPrice"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Boat Price Per Day in USD</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={0} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatGuests"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Boat Guests</FormLabel>
                                    <FormControl>
                                        <Input placeholder="12"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                    <div>
                        <FormLabel className="font-bold text-lg">Choose your onboard amenities</FormLabel>
                            <div className="grid grid-cols-2 gap-4 mt-2">

                            
                                <FormField
                                control={form.control}
                                name="wifi"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Wi Fi</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="crew"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Crew</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="food"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Food</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="drinks"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Drinks</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="gps"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>GPS</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="radio"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Radio</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="lifeJackets"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Life Jackets</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="equipment"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Fishing Equipment</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="boatLicense"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Boat License</FormLabel>
                                   </FormItem>
                                )}                                 
                                />
                                <FormField
                                control={form.control}
                                name="captainLicense"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-end space-x-3 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        
                                    </FormControl>
                                    <FormLabel>Captain License</FormLabel>
                                    </FormItem>
                                )}                                 
                                />
                        </div>
                    
                    </div>
                <div>
                    <FormLabel className="font-bold text-lg">Boat Specification</FormLabel>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <FormField
                            control={form.control}
                            name="boatClass"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Class</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Boat Class"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatMake"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Make</FormLabel>
                                    <FormControl>
                                        <Input placeholder="VIKING BILLFISH"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatModel"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Model</FormLabel>
                                    <FormControl>
                                        <Input placeholder="VIKING BILLFISH"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatYear"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Year</FormLabel>
                                    <FormControl>
                                        <Input placeholder="2018"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatLength"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Length</FormLabel>
                                    <FormControl>
                                        <Input placeholder="37-FT"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <FormField
                            control={form.control}
                            name="boatHeight"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boat Height</FormLabel>
                                    <FormControl>
                                        <Input placeholder="37-FT"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}              
                                        
                        />
                        <div className="w-full mt-3">
                      <Button open={open} onOpenChange={setOpen}> <PlusCircleIcon className="mr-3 w-4 h-4"/>  Add </Button>
                     </div>
                        
                        
                        </div>



                </div>



            </form>


        </Form>


    </div>
  )
}

export default AddActivityForm;