'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Routes } from '@/config/routes';
import Button from '@/components/ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import { signUpSchema } from 'schemas';
import { FormError } from '../form-error';
import { useTransition } from 'react';
import { FormSuccess } from '../form-success';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { signup } from 'actions/signup';



const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const[success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    setError("");
    setSuccess("");


    startTransition(() => {
      signup(values)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })

    });
    

  }

  return (
    
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
          
          >
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({field}) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='John Doe'
                      
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='john.doe@example.com'
                        type='email'
                      
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='********'
                        type='password'
                      
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-7 flex items-center justify-between">

          
          </div>
          <FormError message={error}/> 
          <FormSuccess message={success}/> 
          <Button disabled={isPending} type="submit" className="mb-2 w-full" size="xl">
            Create Account
          </Button>

          <p className="flex justify-center text-sm font-semibold leading-6 text-gray">
            Already have an account? {'  '}
            <Link href={Routes.auth.signIn} className="text-primary underline">
              Sign In
            </Link>
          </p>
          <div className="relative mt-7 mb-8 text-center before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-full before:bg-gray-200">
            <span className="relative z-10 m-auto inline-flex bg-white px-5">
              Or
            </span>
          </div>


        </form>
      </Form>
      



  )
}

export default SignUpForm;

 