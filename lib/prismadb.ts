import { PrismaClient } from "@prisma/client";
import {Pool} from "@neondatabase/serverless";
import {PrismaNeon} from "@prisma/adapter-neon"




declare global {
    var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

export default prismadb;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

