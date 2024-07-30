import prismadb from "lib/prismadb";
import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prismadb),
  providers: [Google],
  pages: {
    signIn: '/sign-in',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

})