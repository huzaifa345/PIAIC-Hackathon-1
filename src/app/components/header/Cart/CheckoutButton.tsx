"use client"
import getStripePromise from '@/lib/stripe';
import React from 'react'
import { cart } from './Cart';


type props = {
    cartData: cart[]
}

function CheckoutButton(props: props) {
    const { cartData } = props;

    async function checkOut() {
        console.log(cartData)
        const stripe =await getStripePromise();
        let sample = [
            {
                product: 1,
                name: "stripe product",
                price: 400,
                quantity : 2
            }
        ]
        const response = await fetch("/api/stripe", {
            method: "POST",
            headers :{"Content-type":"application/json "},
            body: JSON.stringify(cartData)
        })
        const data = await response.json()
        if(data.session) {
           stripe?.redirectToCheckout({sessionId: data.session.id})
        }
    }
    return (
        <div className=' w-full '>
            <button className='absolute bottom-0 right-0  mx-auto sm:w-2/4  md:w-2/5 xl:w-2/6 lg:2/4 bg-slate-900 font-medium text-xl text-white p-3 text-center' onClick={checkOut}>Check Out</button>
        </div>
    )
}

export default CheckoutButton