'use server';
import * as z from "zod";
import { signInSchema } from "schemas";


export const signin = async (values: z.infer<typeof signInSchema>) => {
    // console.log(data);
    const validatedFields = signInSchema.safeParse(values);

    if(!validatedFields.success) {
        return {error: "Invalid Credentials"};
    }

    return {success: "Success"};
}