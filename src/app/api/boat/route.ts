import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/dist/types/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId } = auth();

        if (userId) {
            return new NextResponse("Unauthorized", { status: 401, });
        }

        const boat = await prismadb.boat.create({
            data: {
                ...body,
                userId,
            },
        });
        
    } catch (error) {
        console.log("Error at /api/boat POST: ", error);
        return new NextResponse("Internal Error", { status: 500 });
        
    }
}