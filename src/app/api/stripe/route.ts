import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { cart } from "@/app/components/header/Cart/Cart";
const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15"
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)

  try {
    if (body.length) {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NZglPHZcCDOol1QRK4tyrjL' },
          { shipping_rate: 'shr_1NZgizHZcCDOol1Q5H2gOp4I' }
        ],
        line_items: body.map((item: cart) => {
          return {
            price_data: {
              currency: 'pkr',
              product_data: {
                name: "product"
              },
              unit_amount : item.price * 100,
            },
            quantity: item.quantity

          }
        }),
        success_url: `${request.headers.get("origin")}/components/Success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session })
      // res.redirect(303, session.url);
    }
    else {
      return NextResponse.json({ message: "no data found" })

    }

  } catch (err: any) {
    return NextResponse.json(err.message)
    // res.status(err.statusCode || 500).json(err.message);
  }

}

