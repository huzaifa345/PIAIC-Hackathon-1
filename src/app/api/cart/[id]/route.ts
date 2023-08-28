import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
    try {
        const id = Number(request.url.split('/').pop())
        const itemToBeDeleted = await db.select().from(cartTable).where(eq(cartTable.id, id))
        if (itemToBeDeleted.length) {
            await db.delete(cartTable).where(eq(cartTable.id, id))
            return NextResponse.json({ message: 'deleted successfully' })
        }
        else {
            return NextResponse.json({ message: 'item not found' }, { status: 404 })
        }

    } catch (error) {
        return NextResponse.json({ message: 'something went wrong', error }, { status: 500 })
    }

}

export const PUT = async (request: NextRequest) => {
    const id = Number(request.url.split('/').pop())
    const itemToBeDeleted = await db.select().from(cartTable).where(eq(cartTable.id, id))
    if (itemToBeDeleted.length) {
        const req = await request.json()
        try {
            const res = await db.update(cartTable).set({
                quantity: req.quantity,
                size: req.size,
            }).where(eq(cartTable.id, id)).returning()

            return NextResponse.json({ res })

        } catch (error) {
            console.log("error in request", error)
        }
    }

}