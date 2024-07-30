import prismadb from "lib/prismadb";

export const getBoatById = async(boatId: string) => {
    try {
        const boat = await prismadb.boat.findUnique({
            where: {
                id: boatId
            },
            include: {
                activity: true
            },
        });

        if(!boat) return null;

        return boat;
        
    } catch (error: any) {
        throw new Error(error);

        
    }
};