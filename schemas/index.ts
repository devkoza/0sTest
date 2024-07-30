
import * as z from "zod";

export const signInSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'The email is required.' })
      .email({ message: 'The email is invalid.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be 8 character long.' }),
  });

  export const signUpSchema = z.object({
    
    name: z.string().min(1, {
        message: "Name is required"
    }),
    
    email: z
      .string()
      .min(1, 'The email is required.')
      .email({ message: 'The email is invalid.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be 8 character long.' }),

  })
 
  