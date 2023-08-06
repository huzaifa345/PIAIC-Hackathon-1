import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uuid } from "uuid"
import { cookies } from "next/dist/client/components/headers";
import { eq } from "drizzle-orm";



export const GET = async (request: NextRequest) => {
    console.log(request)
    const id = cookies().get("user_id")!.value
    if (id) {
        try {
            const res = await db.select().from(cartTable).where(eq(cartTable.user_id, id))
            return NextResponse.json({ res })

        } 
        catch (error) {
            console.log(error)
            return NextResponse.json({ message: "something went wrong" })
        }
    }
    else {
        return NextResponse.json({ message: "something went wrong" })
    }

}


export const POST = async (request: NextRequest) => {
    const uid = uuid()
    const user_id = cookies().get("user_id")
    console.log(user_id)
    if (!user_id) {

        cookies().set("user_id", uid)
    }
    const req = await request.json()

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: req.quantity,
            user_id: cookies().get("user_id")?.value as string,
            size: req.size,
            price : req.price
        }).returning()


        return NextResponse.json({ res })

    } catch (error) {
        console.log("error in request", error)
    }
}