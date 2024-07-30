


import * as z from "zod";
import { signUpSchema } from "schemas";
import bcrypt from "bcryptjs";
import prismadb from "lib/prismadb";


export const signup = async (data: z.infer<typeof signUpSchema>) => {
    // console.log(data);
    const validatedFields = signUpSchema.safeParse(data);

    if(!validatedFields.success) {
        return {error: "Invalid Credentials"};
    }

    const {email, password, name,} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prismadb.user.findUnique({
        where: {
            email,
    

        
        }
    });
    if (existingUser) {
        return {error: "Email already in use!"};

    }

    await prismadb.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return {success: "Success"};
}